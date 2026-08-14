import { jsonToLayoutAdapter } from '@/coremedia-integration/adapters/JsonToLayoutAdapter'
import { cmsRepo } from '@/graphql/CMSRepo'
import { normalizeCmsData } from '@/lib/server-actions'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang')
  const route = searchParams.get('path')

  try {
    // Fetch data from graphql
    const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`
    const cmsResp = await cmsRepo.getLayoutData(cmLanguage, route || '/')
    const cmsTransformed = await normalizeCmsData(cmsResp)
    const layoutData = jsonToLayoutAdapter.adapt(cmsTransformed)

    if (!!(layoutData?.widgets || []).length) {
      return NextResponse.json({ ...layoutData })
    } else {
      return NextResponse.json(null, { status: 404 })
    }
  } catch (error) {
    console.error(error)

    return NextResponse.json(null, { status: 404 })
  }
}
