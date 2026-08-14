import { IM04 } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import {
  getAdapterImage,
  getAdapterCTA,
  getAkamayUrl,
  getComponentImageCropping,
} from '@/lib/utilities'

export class M04Adapter extends Adapter<IM04, Nullable<IM04>> {
  adapt: (source: any) => Nullable<IM04> = source => {
    if (!source.length) return null
    const data = source[0]

    const validateIcon = getAdapterImage(data?.pictures)[0]?.includes('svg')

    return {
      theme: data?.teaserOverlaySettings?.style?.textCls,
      icon: validateIcon ? getAkamayUrl(getAdapterImage(data?.pictures)[0] || '') : '',
      title: data?.teaserTitle,
      subtitle: data?.teaserText?.text,
      alignment: data?.viewtype ? 'left' : 'right',
      cta: getAdapterCTA(data?.teaserTargets)?.[0] || null,

      picture: getComponentImageCropping('M04', data?.media),
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
