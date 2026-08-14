import { IM02 } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterImage, getAkamayUrl, getAdapterCTA, getBrandColorClasses } from '@/lib/utilities'

export class M02Adapter extends Adapter<IM02, Nullable<IM02>> {
  adapt: (source: any) => Nullable<IM02> = source => {
    if (!source.length) return null
    const data = source[0]

    const items = data?.items.map(item => {
      const validateStrongElem = item?.teaserTargets[0]?.callToActionText

      const getTeaser = item?.teaserText?.text?.split('</p>')
      getTeaser[1] = `<br /> <strong> ${validateStrongElem}</strong></p>`

      const theme = item?.teaserOverlaySettings?.style?.textCls
      const brandColors = item?.settings?.otherproperties?.['brand-colors']

      return {
        cls: getBrandColorClasses(theme, brandColors),
        text: validateStrongElem ? getTeaser?.join(' ') : item?.teaserText?.text,
        icon: getAkamayUrl(getAdapterImage(item?.pictures)[0] || ''),
        theme,
        cta: getAdapterCTA(item?.teaserTargets)[0] || null,
      }
    })

    return {
      items,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
