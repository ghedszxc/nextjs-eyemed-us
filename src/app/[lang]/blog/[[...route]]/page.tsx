// Modules
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { defaultLocale, locales } from '@/middleware'
import { BLOG_CONSTANTS } from '@/lib/constants/BLOG_CONSTANTS'
import { cmsRepo } from '@/graphql/CMSRepo'
import { blogLayoutAdapter } from '@/coremedia-integration/adapters/BlogLayoutAdapter'
import { getBlogPagination } from '@/lib/utilities'
import { generateMetaData, NavigationLayout } from '../layout'

// Components
import BlogLayout from '@/components/BlogLayout'
import { normalizeBlogContent, normalizeCmsData } from '@/lib/server-actions'

export async function generateMetadata({
  params: _params,
}: PageProps<'/[lang]/blog/[[...route]]'>) {
  const params = await _params
  const route = [BLOG_CONSTANTS.BLOG_ROOT, ...(params.route || [])]
  const [, , article] = route
  let blogId: string | null = null

  // Validate blog id for custom single blog page meta data
  if (article) {
    const id = article.split('-').at(-1)
    const isValidBlog = id && /^\d+$/.test(id)
    if (isValidBlog) blogId = id
  }

  return generateMetaData({ params: { ...params, route }, blogId })
}

export default async function BlogPage({
  params: _params,
  searchParams: _searchParams,
}: PageProps<'/[lang]/blog/[[...route]]'>) {
  const params = await _params
  const searchParams = await _searchParams

  const { lang: _lang, route = [] } = params
  const slug = [BLOG_CONSTANTS.BLOG_ROOT, ...route]
  const lang = _lang || defaultLocale
  const pageNum = Number(searchParams?.pageNum ?? 1)

  try {
    let cmsPage, cmsBlog, cmsReadMore
    const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`
    const cmsPathIds = await cmsRepo.getPathsId()

    // Fetch site ID
    const pathList = cmsPathIds?.content?.sites
      ?.map(site => {
        return {
          id: site?.id || '',
          name: site?.name || '',
          locale: site?.locale?.toLowerCase()?.replace('_', '-') || '',
          modificationDate: site?.modificationDate || '',
          hiddenInSitemap: site?.hiddenInSitemap || false,
        }
      })
      .filter(
        (path: any) =>
          path?.name?.includes('Eyemed') && locales.includes(path.locale) && !path?.hiddenInSitemap
      )
    const currentLocale = pathList.find((path: any) => path?.locale?.includes(lang))

    // ALL POSTS & CATEGORY PAGE
    if (slug.length <= 2) {
      cmsPage = await cmsRepo.getLayoutData(cmLanguage, slug.join('/'))
      cmsPage = await normalizeCmsData(cmsPage)

      // Check if sidebar exists to adjust articles per page
      const hasSidebar = !!cmsPage?.content?.pageByPath?.grid?.rows?.find(
        p => p?.placements?.[0]?.name === 'main_placement_2'
      )?.placements?.[0]?.items?.length

      // All posts page
      if (slug.length === 1) {
        const [blog] = slug
        const { limit, offset } = getBlogPagination(pageNum, hasSidebar)
        cmsBlog = await cmsRepo.getArticles(
          currentLocale?.id?.toString(),
          `+_${blog}`,
          offset,
          limit
        )
      }

      // Category page
      if (slug.length === 2) {
        const [_, category] = slug
        const { limit, offset } = getBlogPagination(pageNum, hasSidebar)
        cmsBlog = await cmsRepo.getArticles(
          currentLocale?.id?.toString(),
          `+_${category}`,
          offset,
          limit
        )
      }
    }

    // SINGLE BLOG PAGE
    if (slug.length === 3) {
      const [, category, article] = slug
      const parts = article.split('-')
      const id = parts[parts.length - 1]
      const categoryPath = slug.slice(0, -1).join('/')

      // Fetch the article content
      cmsBlog = await cmsRepo.getContentById(id)

      if (!cmsBlog?.content?.content) {
        notFound()
      }

      // Normalize blog content (processes m16blogmediaRight and m16blogmediaLeft widgets)
      cmsBlog = await normalizeBlogContent(cmsBlog)

      // Fetch the category page layout
      cmsPage = await cmsRepo.getLayoutData(cmLanguage, categoryPath)
      cmsPage = await normalizeCmsData(cmsPage)

      // Find user defined read more data
      const readMore = cmsBlog?.content?.content?.related?.find(
        item => item.name === 'Related Content Collection'
      )

      // Fetch latest articles if no user defined read more exists
      if (!readMore) {
        cmsReadMore = await cmsRepo.getArticles(
          currentLocale?.id?.toString(),
          `+_${category}`,
          0,
          4
        )
      }
    }

    const layoutData = blogLayoutAdapter.adapt({ cmsPage, cmsBlog, cmsReadMore, pageNum })

    if (!layoutData?.widgets?.length) {
      notFound()
    }

    return (
      <NavigationLayout params={params} data={layoutData}>
        <BlogLayout data={layoutData} lang={lang} path={slug || []} />
      </NavigationLayout>
    )
  } catch (err) {
    notFound()
  }
}
