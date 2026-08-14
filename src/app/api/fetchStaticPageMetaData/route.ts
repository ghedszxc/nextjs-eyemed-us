import { cmsRepo } from '@/graphql/CMSRepo'
import { getAkamayUrl } from '@/lib/utilities'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang')
  const route = searchParams.get('path')
  const cmsResp = await cmsRepo.getMetaData(`${lang}`, route || '')
  const data = cmsResp?.data?.content?.pageByPath

  const hreflangs = data?.localizedVariants
    ?.map(variant => ({
      language: variant?.navigationPath?.[0]?.segment,
      path: variant?.navigationPath?.map(path => path?.segment)?.join('/'),
    }))
    ?.reduce((acc: any, item: any) => {
      acc[item?.language] =
        `${process.env.NEXT_PUBLIC_DOMAIN}${item.path !== '/' ? item.path + '/' : item.language}`
      return acc
    }, {})

  // Fetch meta data image by id
  const metaImageID = data?.settings?.MetaImg?.[0]?.replace(
    /Content\[coremedia:\/\/\/cap\/content\/|]/g,
    ''
  )

  let akamaiImageURL: string = ''
  if (metaImageID) {
    const metaImageResp = await cmsRepo.getFileLink(metaImageID)

    akamaiImageURL = metaImageResp?.data?.content?.content?.data?.uri
      ? getAkamayUrl(metaImageResp?.data?.content?.content?.data?.uri)
      : ''
  }

  const BANNER_TYPE = ['m01-card', 'm01-copyblock']
  if (BANNER_TYPE.includes(data?.localizedVariants?.[0]?.grid?.placements[0]?.viewtype)) {
    akamaiImageURL = getAkamayUrl(
      data?.localizedVariants?.[0]?.grid?.placements[0]?.items[0]?.media[0]?.data?.uri
    )
  }

  return NextResponse.json({
    title: data?.htmlTitle,
    description: data?.htmlDescription,
    metaDataImage: akamaiImageURL || '',
    hreflang: hreflangs,
    noIndexNoFollow: !data?.hiddenInSitemap,
  })
}
