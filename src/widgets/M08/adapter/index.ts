import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { TM08 } from '../types'
import { getAdapterCTA, getAkamayUrl, getBrandColorClasses } from '@/lib/utilities'
import { IFeatureListing } from '@/models/IFeatureListing'

export class M08Adapter extends Adapter<TM08, Nullable<TM08>> {
  adapt: (source: any) => Nullable<TM08> = source => {
    if (!source.length) return null
    const data = source[0]

    const banners = data?.items?.map(item => {
      const theme = item?.collectionTextOverlayStyle || data?.collectionTextOverlayStyle
      const brandColors = item?.settings?.otherproperties?.['brand-colors']

      return {
        title: item?.teaserTitle || '',
        subtitle: item?.teaserText?.text || '',
        titleType: item?.settings?.otherproperties?.titleTagHeader?.toLowerCase?.() || 'h4',
        icon: getAkamayUrl(item?.pictures?.[0]?.data?.uri),
        cls: getBrandColorClasses(theme, brandColors),
        theme,
      }
    })

    let cta
    const featured = data?.teaserLXCallToActionSettings?.[0]?.target

    let bannerImage: IFeatureListing = {
      title: featured?.teaserTitle || '',
      subtitle: featured?.teaserText?.text || '',
      icon: getAkamayUrl(featured?.pictures?.[0]?.data?.uri),
      cta: getAdapterCTA(featured?.teaserTargets)?.[0] || null,
    }

    // TODO: to refactor image croppings and alt property
    if (!bannerImage?.title) {
      cta = bannerImage.cta
      const image = data?.media?.[0]
      bannerImage = {
        ...bannerImage,
        image: {
          desktop: {
            url: getAkamayUrl(image?.uriTemplate)
              ?.replace('{cropName}', 'square_ratio1x1')
              ?.replace('{width}', '385'),
            alt: image?.alt || image?.title || '',
          },
          mobile: {
            url: cta
              ? getAkamayUrl(data?.pictures?.[1]?.data?.uri)
              : getAkamayUrl(image?.uriTemplate)
                  ?.replace('{cropName}', 'landscape_ratio9x6')
                  ?.replace('{width}', '990'),
            alt: image?.alt || image?.title || '',
          },
        },
      }
    }

    return {
      theme: data?.collectionTextOverlayStyle,
      title: data?.collectionTitle || '',
      subtitle: data?.collectionText || '',
      banners,
      bannerImage,
      cta,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
