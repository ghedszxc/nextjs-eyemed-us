import { IM16MediaLeftAndRight } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { removeCMTextHyphen, getAkamayUrl } from '@/lib/utilities'

export class M16MediaLeftAndRightAdapter extends Adapter<
  IM16MediaLeftAndRight,
  Nullable<IM16MediaLeftAndRight>
> {
  adapt: (source: any) => Nullable<IM16MediaLeftAndRight> = source => {
    if (!source?.length) return null

    const data = source[0]

    // Get title from teaserTitle or title
    const title = data?.teaserTitle || data?.title || ''

    // Get body from teaserText.text
    const body = data?.teaserText?.text || data?.detailText?.text || ''

    // Determine media type and URL from pictures array or media array
    const mediaItem = data?.pictures?.[0] || data?.media?.[0]
    const media = mediaItem?.data?.uri ? {
      type: mediaItem.type === 'CMVideoImpl' ? 'video' as const : 'image' as const,
      url: getAkamayUrl(mediaItem.data.uri),
      alt: mediaItem.alt || mediaItem.data?.alt || '',
    } : undefined

    // Get theme from CMS data, fallback to undefined (will use globalTheme in component)
    const themeValue = data?.settings?.bgcolor || data?.teaserOverlaySettings?.style || undefined

    return {
      title: removeCMTextHyphen(title),
      body: removeCMTextHyphen(body),
      media,
      theme: themeValue,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
