import { IIconTextWide } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterImage, getAdapterCTA, getAkamayUrl } from '@/lib/utilities'

export class IconTextWideAdapter extends Adapter<IIconTextWide, Nullable<IIconTextWide>> {
  adapt: (source: any) => Nullable<IIconTextWide> = source => {
    if (!source.length) return null
    const data = source[0]

    return {
      theme: data?.teaserOverlaySettings?.style?.textCls,
      icon: getAkamayUrl(getAdapterImage(data?.pictures)[0] || ''),
      title: data?.teaserTitle,
      subtitle: data?.teaserText?.text,
      cta: getAdapterCTA(data?.teaserTargets)?.[0] || null,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
