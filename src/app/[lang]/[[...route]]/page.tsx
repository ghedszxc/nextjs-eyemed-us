import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import GridLayout from '@/components/GridLayout'
import { cmsRepo } from '@/graphql/CMSRepo'
import { generateMetaData } from '../blog/layout'
import { normalizeCmsData } from '@/lib/server-actions'
import { jsonToLayoutAdapter } from '@/coremedia-integration/adapters/JsonToLayoutAdapter'
import { headerNavigationAdapter } from '@/widgets/EMHeader/adapter'
import { footerNavigationAdapter } from '@/widgets/EMFooter/adapter'

const Navigation = dynamic(() => import('@/widgets/EMHeader'))
const Footer = dynamic(() => import('@/widgets/EMFooter'))

export async function generateMetadata({ params: _params }: PageProps<'/[lang]/[[...route]]'>) {
  const params = await _params
  return generateMetaData({ params })
}

export default async function PageGenerator({
  params,
  searchParams: _searchParams,
}: PageProps<'/[lang]/[[...route]]'>) {
  try {
    const { lang, route = [] } = await params
    const searchParams = await _searchParams

    const cmsResp = await cmsRepo.getLayoutData(lang, route.join('/'))
    const cmsNavigation = await cmsRepo.getNavigation(lang)
    const cmsTransformed = await normalizeCmsData(cmsResp)

    const layoutData = jsonToLayoutAdapter.adapt(cmsTransformed)
    const headerData = headerNavigationAdapter.adapt(cmsNavigation)
    const footerData = footerNavigationAdapter.adapt(cmsNavigation)
    const hideHeader = layoutData?.navigationData?.hideHeader || false
    const url = {
      route: route,
      locale: lang,
    }

    const navData = {
      ...headerData,
      crumbs: layoutData?.navigationData?.crumbs,
    }

    if (!layoutData?.widgets?.length) notFound()

    return (
      <>
        {!hideHeader && navData && <Navigation {...navData} />}
        <GridLayout
          data={layoutData}
          url={url}
          lang={lang}
          route={route}
          searchParams={searchParams}
        />
        {footerData && <Footer {...footerData} />}
      </>
    )
  } catch (error) {
    notFound()
  }
}
