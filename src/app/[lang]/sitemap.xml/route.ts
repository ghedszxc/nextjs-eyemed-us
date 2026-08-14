import { NextRequest } from 'next/server'
import { defaultLocale, locales } from '@/middleware'
import { localeSegmentRemoval } from '@/lib/utilities'
import { SITEMAP_TO_REMOVE } from '@/lib/constants/SITEMAP_TO_REMOVE'
import { StaticPathsAdapter } from '@/coremedia-integration/adapters/staticPathsAdapter'
import { cmsRepo } from '@/graphql/CMSRepo'
import { BLOG_CONSTANTS } from '@/lib/constants/BLOG_CONSTANTS'
import { generateSitemap, getLocale, IAdaptedPath, ICMSPath, IPath } from '@/lib/sitemap'

export async function GET(request: NextRequest) {
  try {
    const locale = getLocale(request) || defaultLocale

    // 1. Fetch CMS site IDs
    const cmsPathIds = await cmsRepo.getPathsId()

    const sites = cmsPathIds?.content?.sites
    if (!sites?.length) {
      throw new Error('[SITEMAP] CMS sites missing')
    }

    // 2. Build locale paths
    const pathIdArr = sites
      .map((site: ICMSPath) => ({
        id: site.id,
        name: site.name,
        locale: localeSegmentRemoval(site.root.segment)?.replace('/', '') || defaultLocale,
        modificationDate: site.modificationDate || '',
        hiddenInSitemap: site.hiddenInSitemap || false,
      }))
      .filter(p => p.name?.includes('Eyemed') && locales.includes(p.locale))

    if (!pathIdArr?.length) {
      throw new Error('[SITEMAP] Locale paths are empty')
    }

    // 3. Resolve locale
    const currentLocale = pathIdArr.find(path => path.locale === locale)
    if (!currentLocale) {
      throw new Error(`[SITEMAP] Site data not found for ${locale}`)
    }

    // 4. Fetch page paths
    const pathsData = await cmsRepo.getPathsData(currentLocale.id)
    const adapter = new StaticPathsAdapter()
    const adaptedRes = adapter.adapt(pathsData)

    if (!adaptedRes?.length) {
      throw new Error('[SITEMAP] Adapted paths invalid')
    }

    const pagePaths: IPath[] = adaptedRes
      .filter(p => !p.hiddenInSitemap)
      .map((p: IAdaptedPath) => {
        const isRoot = p?.params?.page?.length <= 0
        const page = p.params.page.join('/')
        if (SITEMAP_TO_REMOVE.includes(page)) return null

        return {
          path: isRoot
            ? `${process.env.NEXT_PUBLIC_DOMAIN}${p.locale}/`
            : `${process.env.NEXT_PUBLIC_DOMAIN}${p.locale}/${page}${page ? '/' : ''}`,
          modificationDate: p.modificationDate,
          isPriority: isRoot,
        }
      })
      .filter(Boolean)

    // 5. Fetch all the blog article paths
    let offset = 0
    const limit = 50
    let blogPathsData: any[] = []

    const initialBlogs = await cmsRepo.getBlogPathsData(currentLocale.id, '_blog', offset, limit)

    const search = initialBlogs?.content?.search
    if (!search) {
      throw new Error('[SITEMAP] Invalid blog search response')
    }

    const total = search.numFound ?? 0
    blogPathsData.push(...search.result)

    let pageCount = 0
    const MAX_PAGES = 20

    while (blogPathsData.length < total) {
      if (pageCount++ >= MAX_PAGES) {
        console.error(
          `[SITEMAP] Blog pagination capped (fetched: ${blogPathsData.length}; total: ${total})`
        )
        break
      }

      offset += limit

      const res = await cmsRepo.getBlogPathsData(currentLocale.id, '_blog', offset, limit)

      const results = res?.content?.search?.result ?? []
      if (!results.length) break

      blogPathsData.push(...results)
    }

    const blogPaths: IPath[] = blogPathsData.map(blog => {
      const category = blog?.subjectTaxonomy
        ?.filter(b => b?.value !== `_${BLOG_CONSTANTS.BLOG_ROOT}`)?.[0]
        ?.value?.slice(1)

      const article = [blog?.segment, blog?.id].filter(Boolean).join('-')
      const page = [category, article].filter(Boolean).join('/')

      return {
        path: `${process.env.NEXT_PUBLIC_DOMAIN}${currentLocale.locale}/${BLOG_CONSTANTS.BLOG_ROOT}/${page}${page ? '/' : ''}`,
        modificationDate: blog.modificationDate,
        isPriority: false,
      }
    })

    const sitemap = generateSitemap(locale, pagePaths.concat(blogPaths), locales)

    return new Response(sitemap, {
      status: 200,
      headers: { 'content-type': 'text/xml' },
    })
  } catch (err) {
    return new Response(err instanceof Error ? err.message : JSON.stringify(err, null, 4), {
      status: 500,
    })
  }
}
