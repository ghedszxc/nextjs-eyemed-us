import { TM01Title } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'

export class M01TitleAndParagraphAdapter extends Adapter<TM01Title, Nullable<TM01Title>> {
  adapt: (source: any) => Nullable<TM01Title> = source => {
    if (!source.length) return null
    const data = source[0]

    const bannerSettings = data?.settings?.otherproperties

    const topBannerTitle = bannerSettings?.title
    const topBannerText = bannerSettings?.description
    const theme = data?.teaserOverlaySettings?.style?.textCls || ''

    return {
      theme,
      bannerText: topBannerText,
      bannerTitle: topBannerTitle,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
