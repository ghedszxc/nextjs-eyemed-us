import { TM01CopyBlock } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAkamayUrl } from '@/lib/utilities'

export class M01CopyBlockAdapter extends Adapter<TM01CopyBlock, Nullable<TM01CopyBlock>> {
  adapt: (source: any) => Nullable<TM01CopyBlock> = source => {
    if (!source.length) return null
    const data = source[0]

    let desktopActualImageCropping
    let mobileActualImageCropping

    const bannerTitle = data?.teaserTitle || ''
    const bannerText = data?.teaserText?.text || ''

    const bannerSettings = data?.settings?.otherproperties

    const showTopBanner = bannerSettings['Show top title and paragraph'] ?? false
    const topBannerTitle = bannerSettings?.title
    const topBannerText = bannerSettings?.description
    const isShort = bannerSettings['is short'] ?? false
    const theme = data?.teaserOverlaySettings?.style?.textCls || ''

    const desktopImage = data?.media?.[0] || undefined
    const mobileImage = data?.media?.[1] || undefined
    const targetCropping = isShort ? 'heroShort' : 'heroTall'
    const targetCroppingMobile = 'landscape_ratio9x6'
    if (desktopImage?.crops?.length > 0) {
      const desktopMediaCropping = desktopImage?.crops?.find(crop => crop?.name === targetCropping)
      desktopActualImageCropping = desktopImage?.uriTemplate
        ?.replace('{cropName}', targetCropping)
        ?.replace(
          '{width}',
          desktopMediaCropping?.sizes[desktopMediaCropping?.sizes?.length - 1]?.width
        )
    } else {
      desktopActualImageCropping = desktopImage?.uriTemplate
    }

    if (mobileImage?.crops?.length > 0) {
      const mobileMediaCropping = mobileImage?.crops?.find(
        crop => crop?.name === targetCroppingMobile
      )
      mobileActualImageCropping = mobileImage?.uriTemplate
        ?.replace('{cropName}', targetCroppingMobile)
        ?.replace(
          '{width}',
          mobileMediaCropping?.sizes[mobileMediaCropping?.sizes?.length - 1]?.width
        )
    } else {
      mobileActualImageCropping = mobileImage?.uriTemplate
    }

    return {
      bannerText,
      bannerTitle,
      showTopBanner,
      topTitle: topBannerTitle || '',
      topText: topBannerText || '',
      isShort,
      theme,
      images: {
        desktop: {
          url: getAkamayUrl(desktopActualImageCropping || ''),
          alt: desktopImage?.alt,
        },
        mobile: {
          url: getAkamayUrl(mobileActualImageCropping || ''),
          alt: mobileImage?.alt,
        },
      },
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
