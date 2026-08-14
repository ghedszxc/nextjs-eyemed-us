import { IM05ContactUsCTA } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import {
  getAkamayUrl,
  getAdapterCTA,
  getAdapterImage,
  getComponentImageCropping,
} from '@/lib/utilities'

export class M05ContactUsCTAAdapter extends Adapter<IM05ContactUsCTA, Nullable<IM05ContactUsCTA>> {
  adapt: (source: any) => Nullable<IM05ContactUsCTA> = source => {
    if (!source.length) return null
    const data = source[0]

    const validateIcon = getAdapterImage(data?.pictures)[0]?.includes('svg')

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText?.text,
      cta: getAdapterCTA(data?.teaserTargets)?.[0] || null,
      theme: data?.teaserOverlaySettings?.style?.textCls,
      icon: validateIcon ? getAkamayUrl(getAdapterImage(data?.pictures)[0] || '') : '',
      images: getComponentImageCropping('M05', data?.media),
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
