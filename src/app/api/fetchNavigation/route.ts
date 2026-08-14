import { cmsRepo } from '@/graphql/CMSRepo'
import { footerNavigationAdapter } from '@/widgets/EMFooter/adapter'
import { headerNavigationAdapter } from '@/widgets/EMHeader/adapter'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'en-us'
  //   const route = searchParams.get('path')

  try {
    // Fetch navigation data
    const cmsNavigation = await cmsRepo.getNavigation(lang)
    const headerData = headerNavigationAdapter.adapt(cmsNavigation)
    const footerData = footerNavigationAdapter.adapt(cmsNavigation)

    return NextResponse.json({
      header: headerData,
      footer: footerData,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(null, { status: 400 })
  }
}
