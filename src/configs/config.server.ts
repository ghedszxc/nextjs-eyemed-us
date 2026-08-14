import 'server-only'

const safeEnv = (value?: string, defaultValue?: string) => value || defaultValue || ''

const safeNumberEnv = (value?: string, defaultValue?: number) => {
  if (value == null) return defaultValue ?? 0
  return parseInt(value)
}

const serverConfig = {
  graphQLUrl: safeEnv(process.env.GRAPHQL_URL),
  revalidateSecret: safeEnv(process.env.REVALIDATE_SECRET),
  cacheTtl: {
    navigation: safeNumberEnv(process.env.SITEMAP_CACHE_TTL, 86_400),
    metadata: safeNumberEnv(process.env.METADATA_CACHE_TTL, 1_800),
    headerFooter: safeNumberEnv(process.env.HEADER_FOOTER_CACHE_TTL, 1_800),
    mainExpanded: safeNumberEnv(process.env.PAGE_CACHE_TTL, 360),
    blogSearch: safeNumberEnv(process.env.BLOG_SEARCH_CACHE_TTL, 360),
    content: safeNumberEnv(process.env.CONTENT_CACHE_TTL, 360),
    settings: safeNumberEnv(process.env.SETTINGS_CACHE_TTL, 1_800),
  },
}

export type ServerConfig = typeof serverConfig

export default serverConfig
