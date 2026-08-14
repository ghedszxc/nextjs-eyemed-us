// Modules
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cmsRepo } from '@/graphql/CMSRepo'
import { jsonToLayoutAdapter } from '@/coremedia-integration/adapters/JsonToLayoutAdapter'
import { generateMetaData, NavigationLayout } from '../blog/layout'
import { getBlogPagination } from '@/lib/utilities'

// Components
import GridLayout from '@/components/GridLayout'
import { locales } from '@/middleware'
import { blogLayoutAdapter } from '@/coremedia-integration/adapters/BlogLayoutAdapter'
import BlogLayout from '@/components/BlogLayout'
import { normalizeBlogContent, normalizeCmsData } from '@/lib/server-actions'

export async function generateMetadata({ params: _params }: PageProps<'/[lang]/cmpreview'>) {
  const params = await _params
  return generateMetaData({ params })
}

export default async function PageGenerator({
  params: _params,
  searchParams: _searchParams,
}: PageProps<'/[lang]/cmpreview'>) {
  try {
    const params = await _params
    const searchParams = await _searchParams

    const { lang } = params
    const route = []

    const id = searchParams?.id as string
    let isBlogsPage = false
    let contentType = null

    // Fetch data from graphql
    if (!id) notFound()

    const contentRes = await cmsRepo.getContentById(
      id?.replace('coremedia:///cap/content/', '') || ''
    )

    contentType = contentRes?.content?.content?.type || null
    if (contentType !== 'CMChannel' && contentType !== 'CMArticle') {
      notFound()
    }

    //Check if the page is blogs page or article
    if (
      (contentType === 'CMChannel' &&
        contentRes?.content?.content?.navigationPath?.some((nav: any) =>
          nav.segment?.includes('blog')
        )) ||
      contentType === 'CMArticle'
    ) {
      isBlogsPage = true
    }

    if (!isBlogsPage) {
      const cmsResp = await cmsRepo.getPreviewLayoutData(
        id?.replace('coremedia:///cap/content/', '') || ''
      )

      const cmsTransformed = await normalizeCmsData(cmsResp)

      const layoutData = jsonToLayoutAdapter.adapt(cmsTransformed)

      const url = {
        route: route,
        locale: lang,
      }

      // Check for both layoutData and widgets to ensure we have content
      if (!layoutData?.widgets?.length) notFound()

      return (
        <NavigationLayout params={params} data={layoutData}>
          <GridLayout
            data={layoutData}
            url={url}
            lang={lang}
            route={route}
            searchParams={searchParams}
          />
        </NavigationLayout>
      )
    } else {
      let cmsPage, cmsBlog, cmsReadMore
      const pageNum = Number(searchParams?.pageNum ?? 1)
      const isArticle = contentType === 'CMArticle'
      const isBlogCategoryPage =
        contentType === 'CMChannel' && contentRes?.content?.content?.navigationPath?.length === 3
      const isBlogHomePage =
        contentType === 'CMChannel' && contentRes?.content?.content?.navigationPath?.length === 2

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
            path?.name?.includes('Eyemed') &&
            locales.includes(path.locale) &&
            !path?.hiddenInSitemap
        )
      const currentLocale = pathList.find((path: any) => path?.locale?.includes('en-us'))

      if (isBlogHomePage) {
        cmsPage = await cmsRepo.getPreviewLayoutData(
          id?.replace('coremedia:///cap/content/', '') || ''
        )
        cmsPage = await normalizeCmsData(cmsPage)

        // Check if sidebar exists to adjust articles per page
        const hasSidebar = !!cmsPage?.content?.pageByPath?.grid?.rows?.find(
          p => p?.placements?.[0]?.name === 'main_placement_2'
        )?.placements?.[0]?.items?.length

        // All posts page
        const { limit, offset } = getBlogPagination(pageNum, hasSidebar)
        cmsBlog = await cmsRepo.getArticles(currentLocale?.id?.toString(), '+_blog', offset, limit)

        const layoutData = blogLayoutAdapter.adapt({ cmsPage, cmsBlog, cmsReadMore, pageNum })

        if (!layoutData?.widgets?.length) {
          notFound()
        }
        return (
          <NavigationLayout params={params} data={layoutData}>
            <BlogLayout data={layoutData} lang={lang} path={[]} />
          </NavigationLayout>
        )
      }

      if (isBlogCategoryPage) {
        let category = contentRes?.content?.content?.navigationPath[2]?.segment
        cmsPage = await cmsRepo.getPreviewLayoutData(
          id?.replace('coremedia:///cap/content/', '') || ''
        )
        cmsPage = await normalizeCmsData(cmsPage)

        // Check if sidebar exists to adjust articles per page
        const hasSidebar = !!cmsPage?.content?.pageByPath?.grid?.rows?.find(
          p => p?.placements?.[0]?.name === 'main_placement_2'
        )?.placements?.[0]?.items?.length

        // All posts page
        const { limit, offset } = getBlogPagination(pageNum, hasSidebar)
        cmsBlog = await cmsRepo.getArticles(
          currentLocale?.id?.toString(),
          `+_${category}`,
          offset,
          limit
        )

        const layoutData = blogLayoutAdapter.adapt({ cmsPage, cmsBlog, cmsReadMore, pageNum })

        if (!layoutData?.widgets?.length) {
          notFound()
        }

        return (
          <NavigationLayout params={params} data={layoutData}>
            <BlogLayout data={layoutData} lang={lang} path={['en-us', 'blog', category]} />
          </NavigationLayout>
        )
      }

      if (isArticle) {
        const slug = contentRes?.content?.content?.navigationPath?.map(path => path.segment)
        const cmsPagePath = contentRes?.content?.content?.navigationPath
        const articleSegement = cmsPagePath?.pop() //returns the last element
        const language = cmsPagePath?.shift() // returns the first element "en-us"
        const categoryPath = cmsPagePath?.map(path => path.segment)?.join('/') // returns "blog/{category}"
        const categoryName = cmsPagePath
          ?.map(path => path.segment)
          ?.join('/')
          .split('/')[1] // returns "{category}"

        // console.log(cmsCategoryPath)
        cmsBlog = await cmsRepo.getContentById(id?.replace('coremedia:///cap/content/', ''))

        // Normalize blog content (processes m16blogmediaRight and m16blogmediaLeft widgets)
        cmsBlog = await normalizeBlogContent(cmsBlog)
        // Fetch the category page layout
        cmsPage = await cmsRepo.getLayoutData(language?.segment, categoryPath)
        cmsPage = await normalizeCmsData(cmsPage)

        // Find user defined read more data
        const readMore = cmsBlog?.content?.content?.related?.find(
          item => item.name === 'Related Content Collection'
        )

        // Fetch latest articles if no user defined read more exists
        if (!readMore) {
          cmsReadMore = await cmsRepo.getArticles(
            currentLocale?.id?.toString(),
            `+_${categoryName}`,
            0,
            4
          )
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
      }

      return <></>
    }
  } catch (error) {
    notFound()
  }
}
