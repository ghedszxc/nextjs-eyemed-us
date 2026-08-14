import { IM16BlogPostBanner } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAkamayUrl } from '@/lib/utilities'

export class M16BlogPostBannerAdapter extends Adapter<
  IM16BlogPostBanner,
  Nullable<IM16BlogPostBanner>
> {
  adapt: (source: any) => Nullable<IM16BlogPostBanner> = source => {
    if (!source.length) return null
    const data = source[0]

    return {
      title: data?.teaserTitle || '',
      picture: data?.pictures?.[0]?.data?.uri ? getAkamayUrl(data.pictures[0].data.uri) : undefined,
      theme: data?.articleColorSettings?.title || 'grape',
      // theme: getThemeText(data?.articleColorSettings?.title) || 'grape',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
