import { IM15 } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAkamayUrl, getAdapterImage, getAdapterCTA, getBrandColorClasses } from '@/lib/utilities'

export class M15Adapter extends Adapter<IM15, Nullable<IM15>> {
  adapt: (source: any) => Nullable<IM15> = source => {
    if (!source.length) return null
    const data = source[0]

    const resources = data?.items?.map(item => {
      const cta = getAdapterCTA(item?.teaserTargets)?.[0]
      const target = item?.teaserTargets?.[0]?.target

      const theme = item?.teaserOverlaySettings?.style?.textCls || data?.collectionTextOverlayStyle
      const brandColors = item?.settings?.otherproperties?.['brand-colors']

      if (target?.type) {
        cta.isExternal = target.type !== 'CMExternalLink'

        if (['CMVideo', 'CMPicture']?.includes(target.type)) {
          cta.url = !target?.dataUrl ? getAkamayUrl(target?.data?.uri || '') : target?.dataUrl
        }
      }

      return {
        cta,
        icon: getAkamayUrl(getAdapterImage(item?.pictures)?.[0] || ''),
        theme,
        cls: getBrandColorClasses(theme, brandColors),
        textLimit: 54,
      }
    })

    return {
      theme: data?.collectionTextOverlayStyle || '',
      title: data?.collectionTitle,
      items: resources,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
