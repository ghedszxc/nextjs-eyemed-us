import { IM06 } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import {
  getAdapterCroppings,
  getAdapterImage,
  getAdapterCTA,
  getAkamayUrl,
  getBrandColorClasses,
} from '@/lib/utilities'

export class M06Adapter extends Adapter<IM06, Nullable<IM06>> {
  adapt: (source: any) => Nullable<IM06> = source => {
    if (!source.length) return null
    const data = source[0]

    const items = data?.items?.map(item => {
      const validateIcon = getAdapterImage(item?.pictures)[0]?.includes('svg')

      const validateVideo = item?.settings?.otherproperties?.modalvideo
      const validateImage = getAdapterCroppings(item?.pictures)?.[0]?.uriTemplate

      const theme =
        item?.teaserOverlaySettings?.style?.textCls ||
        data?.collectionTextOverlayStyle ||
        source[1]?.style?.textCls

      const brandColors = item?.settings?.otherproperties?.['brand-colors']

      return {
        cls: getBrandColorClasses(theme, brandColors),
        type: validateVideo ? 'isVideo' : validateImage ? 'isPicture' : '',
        title: item?.teaserTitle,
        subtitle: item?.teaserText?.text,
        titleTagHeader: item?.settings?.otherproperties?.titleTagHeader,

        theme,

        cta: getAdapterCTA(item?.teaserTargets)?.[0] || null,

        icon: validateIcon ? getAkamayUrl(getAdapterImage(item?.pictures)[0] || '') : '',

        picture: validateImage
          ? getAdapterCroppings(item?.pictures)?.[0]
          : getAdapterCroppings([item?.video?.picture]),
        fallbackImage: validateImage
          ? getAdapterImage(item?.pictures)?.[0]
          : item?.video?.picture?.data?.uri,
        videoUrl: item?.video?.dataUrl,
      }
    })

    const validateTextAlignment = data?.collectionText?.includes('class="align--center"')

    const withHashTag = data?.collectionText
      .split(/<p class="align--center">(.*?)<\/p>/g)
      ?.filter(find => find)
      ?.map(text => {
        return !text?.includes('#')
          ? `<p class="align--center">${text}</p>`
          : `<a name="${text?.split('#')?.[1]}"></a>`
      })

    return {
      theme: data?.collectionTextOverlayStyle || source[1]?.style?.textCls,
      title: data?.collectionTitle,
      subtitle: !validateTextAlignment ? data?.collectionText : withHashTag?.join(''),
      subtitleAlignment: validateTextAlignment && 'textCenter',
      footNote: data?.collectionSubTitle,
      cta: getAdapterCTA(data?.teaserLXCallToActionSettings)?.[0] || null,
      items,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
