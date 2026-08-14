import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { TM13 } from '../types'
import { getBrandColorClasses } from '@/lib/utilities'

export class M13Adapter extends Adapter<TM13, Nullable<TM13>> {
  adapt: (source: any) => Nullable<TM13> = source => {
    if (!source.length) return null
    const data = source[0]

    const features = data?.items?.map(item => {
      const theme = item?.teaserOverlaySettings?.style?.textCls || data?.collectionTextOverlayStyle
      const brandColors = item?.settings?.otherproperties?.['brand-colors']

      return {
        theme,
        cls: getBrandColorClasses(theme, brandColors),
        title: item?.teaserTitle || '',
        subtitle: item?.teaserText?.text || '',
        titleType: item?.settings?.otherproperties?.titleTagHeader?.toLowerCase?.() || 'h3',
      }
    })

    return {
      theme: data?.collectionTextOverlayStyle || '',
      title: data?.collectionTitle || '',
      subtitle: data?.collectionText || '',
      features,
      subtitle2: data?.collectionSubTitle || '',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
