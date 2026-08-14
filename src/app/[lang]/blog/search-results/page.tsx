// Modules
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BLOG_CONSTANTS } from '@/lib/constants/BLOG_CONSTANTS'
import { cmsRepo } from '@/graphql/CMSRepo'
import { jsonToLayoutAdapter } from '@/coremedia-integration/adapters/JsonToLayoutAdapter'
import { generateMetaData, NavigationLayout } from '../layout'

// Components
import GridLayout from '@/components/GridLayout'

export async function generateMetadata({
  params: _params,
}: PageProps<'/[lang]/blog/search-results'>) {
  const params = await _params
  const route = [BLOG_CONSTANTS.BLOG_ROOT, 'search-results']
  return generateMetaData({ params: { ...params, route } })
}

export default async function PageGenerator({
  params: _params,
  searchParams: _searchParams,
}: PageProps<'/[lang]/blog/search-results'>) {
  try {
    const params = await _params
    const searchParams = await _searchParams

    const { lang } = params

    if (!searchParams?.blog_search) {
      return notFound()
    }

    // Fetch data from graphql
    const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`
    const cmsResp = await cmsRepo.getLayoutData(cmLanguage, 'blog/search-results')

    const layoutData = jsonToLayoutAdapter.adapt(cmsResp)

    const url = {
      route: ['blog', 'search-results'],
      locale: lang,
    }

    // Check for both layoutData and widgets to ensure we have content
    if (!layoutData?.widgets?.length) {
      notFound()
    }

    return (
      <NavigationLayout params={params} data={layoutData}>
        <GridLayout data={layoutData} url={url} lang={lang} searchParams={searchParams} />
      </NavigationLayout>
    )
  } catch (error) {
    notFound()
  }
}
