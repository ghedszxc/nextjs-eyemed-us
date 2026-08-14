import 'server-only'

import crypto from 'node:crypto'

import config from '@/configs'

/**
 * CoreMedia caching helpers built on top of the Next.js App Router Data Cache.
 *
 * We cache at the *function-result* layer (`unstable_cache`) rather than the
 * `fetch` layer because `graphql-request` issues POST requests through
 * `cross-fetch`, which (a) bypasses Next.js' instrumented `fetch` and (b) would
 * not be persisted by the Data Cache anyway (only GET fetches are cached).
 *
 * Each cached entry carries:
 *  - a per-meta `revalidate` window (TTL, in seconds) sourced from config, and
 *  - one or more `tags`, enabling on-demand invalidation via `revalidateTag`.
 */

/** Logical content domains used as the coarse-grained cache tags. */
export const CMS_TAG = {
  navigation: 'cms:navigation',
  metadata: 'cms:metadata',
  headerFooter: 'cms:header-footer',
  mainExpanded: 'cms:main-expanded',
  blogSearch: 'cms:blog-search',
  content: 'cms:content',
  settings: 'cms:settings',
} as const

export type CmsMeta = keyof typeof CMS_TAG | ''

/** Fallback TTL (seconds) when a meta type has no configured window. */
export const DEFAULT_TTL_SECONDS = 300

/** Resolve the revalidation window (seconds) for a given meta type. */
export const ttlForMeta = (meta: string): number => config.cacheTtl[meta] ?? DEFAULT_TTL_SECONDS

/** Resolve the coarse-grained content tag for a given meta type. */
export const tagForMeta = (meta: string): string | undefined =>
  (CMS_TAG as Record<string, string>)[meta]

const MAX_TAG_LENGTH = 256

/** Build a stable, locale/path-scoped tag, e.g. `cms:page:en-us/about`. */
export const scopedTag = (base: string, scope?: string): string => {
  if (!scope) {
    return base
  }

  const value = `${base}:${scope}`

  if (value.length <= MAX_TAG_LENGTH) {
    return value
  }

  const hash = crypto.createHash('sha256').update(scope).digest('hex').slice(0, 24)

  return `${base}:${hash}`
}
