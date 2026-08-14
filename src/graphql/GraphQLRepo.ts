import { GraphQLClient } from 'graphql-request'
import { unstable_cache } from 'next/cache'
import { cache as reactCache } from 'react'

import config from '@/configs'

import { CMS_TAG, CmsMeta, scopedTag, tagForMeta, ttlForMeta } from './cmsCache'
import { PageQuery } from './query/Page'
import { PathsQuery } from './query/Paths'
import { PathsIdQuery } from './query/PathsID'
import { ContentByIdQuery } from './query/ContentID'
import { FileLinkQuery } from './query/Filelink'
import { SearchArticleQuery } from './query/SearchArticle'
import { SettingsQuery } from './query/Settings'
import { MetaDataQuery } from './query/MetaData'
import { BlogPathsQuery } from './query/BlogPaths'
import { SearchPageContent } from './query/SearchResult'
import { PageQueryById } from './query/PageById'

type Variables = Record<string, any>

export class GraphQLRepo {
  private _client: GraphQLClient | null = null

  getClient(): GraphQLClient {
    if (!this._client) {
      this._client = new GraphQLClient(config.graphQLUrl, {
        fetch: (input: any, init?: any) => fetch(input, init),
      })
    }
    return this._client
  }

  private rawRequest = reactCache(
    async (query: string, variables: Variables, meta: string): Promise<any> => {
      const client = this.getClient()
      const metaLog = meta ? ` (${meta})` : ''

      try {
        console.log('[CMS] requestCoreMedia' + metaLog + ' ->', { variables })
        const res: any = await client.request(query, variables)

        const placements = res?.content?.pageByPath?.grid?.rows
        if (Array.isArray(placements)) {
          console.log('[CMS] response OK' + metaLog + ', placements count =', placements.length)
        } else {
          console.log('[CMS] response OK' + metaLog)
        }

        return res
      } catch (err: any) {
        console.error('[CMS] request failed:', err?.message ? err.message : String(err))
        throw err
      }
    }
  )

  private requestCoreMedia(
    query: string,
    variables: Variables = {},
    meta: CmsMeta = '',
    extraTags: string[] = []
  ): Promise<any> {
    const tags = [tagForMeta(meta), ...extraTags].filter(Boolean) as string[]

    const cached = unstable_cache(
      (q: string, v: Variables) => this.rawRequest(q, v, meta),
      // keyParts — combined with the serialized arguments to form the cache key.
      ['cms', meta || 'default'],
      { revalidate: ttlForMeta(meta), tags }
    )

    return cached(query, variables)
  }

  getLayoutData(locale: string, path: string) {
    const { query, variables }: Variables = PageQuery({ path: [locale, path].join('/') })
    return this.requestCoreMedia(query, variables, 'mainExpanded', [
      scopedTag(CMS_TAG.mainExpanded, locale),
      scopedTag(CMS_TAG.mainExpanded, [locale, path].join('/')),
    ])
  }

  getPreviewLayoutData(id: string) {
    const { query, variables }: Variables = PageQueryById({ id })
    return this.rawRequest(query, variables, 'preview')
  }

  getPathsData(id: string) {
    const { query, variables }: Variables = PathsQuery({ id })
    return this.requestCoreMedia(query, variables, 'navigation', [
      scopedTag(CMS_TAG.navigation, id),
    ])
  }

  getBlogPathsData(siteId: string, search: string, offset?: number, limit?: number) {
    const { query, variables }: Variables = BlogPathsQuery({ siteId, search, offset, limit })
    return this.requestCoreMedia(query, variables, 'navigation', [
      scopedTag(CMS_TAG.navigation, siteId),
    ])
  }

  getPathsId() {
    const { query }: Variables = PathsIdQuery()
    return this.requestCoreMedia(query, {}, 'navigation')
  }

  getContentById(id: string) {
    const { query, variables }: Variables = ContentByIdQuery({ id })
    return this.requestCoreMedia(query, variables, 'content', [scopedTag(CMS_TAG.content, id)])
  }

  getFileLink(id: string) {
    const { query, variables }: Variables = FileLinkQuery({ id })
    return this.requestCoreMedia(query, variables, 'metadata', [scopedTag(CMS_TAG.metadata, id)])
  }

  getArticles(siteId: string, search: string, offset?: number, limit?: number) {
    const { query, variables }: Variables = SearchArticleQuery({ siteId, search, offset, limit })
    return this.requestCoreMedia(query, variables, 'blogSearch', [
      scopedTag(CMS_TAG.blogSearch, siteId),
    ])
  }

  getSettings(path: string, names: string[]) {
    const { query, variables }: Variables = SettingsQuery({ path, names })
    return this.requestCoreMedia(query, variables, 'settings', [scopedTag(CMS_TAG.settings, path)])
  }

  getMetaData(locale: string, path: string) {
    const { query, variables }: Variables = MetaDataQuery({ path: `${locale}/${path}` })
    return this.requestCoreMedia(query, variables, 'metadata', [
      scopedTag(CMS_TAG.metadata, `${locale}/${path}`),
    ])
  }

  getNavigation(locale: string) {
    const { query, variables }: Variables = PageQuery({
      path: `${locale}/headerfooternavigation`,
    })
    return this.requestCoreMedia(query, variables, 'headerFooter', [
      scopedTag(CMS_TAG.headerFooter, locale),
    ])
  }

  getSiteContents(siteId: string, search: string, offset?: number, limit?: number) {
    const { query, variables }: Variables = SearchPageContent({
      siteId,
      search,
      offset,
      limit,
    })
    return this.requestCoreMedia(query, variables, 'content', [scopedTag(CMS_TAG.content, siteId)])
  }
}
