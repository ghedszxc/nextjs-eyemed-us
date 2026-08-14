import { IM03ConstituentAction } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterCTA } from '@/lib/utilities'

export class M03ConstituentActionAdapter extends Adapter<
  IM03ConstituentAction,
  Nullable<IM03ConstituentAction>
> {
  adapt: (source: any) => Nullable<IM03ConstituentAction> = source => {
    if (!source.length) return null
    const data = source[0]

    return {
      title: data?.teaserTitle,
      subtitle: data?.teaserText?.text,
      cta: getAdapterCTA(data?.teaserTargets)?.[0] || null,
      theme: data?.teaserOverlaySettings?.style?.textCls,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
