import { IM10TestimonialWithMedia } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterCTA, getAkamayUrl } from '@/lib/utilities'

export class M10TestimonialWithMediaAdapter extends Adapter<
  IM10TestimonialWithMedia,
  Nullable<IM10TestimonialWithMedia>
> {
  adapt: (source: any) => Nullable<IM10TestimonialWithMedia> = source => {
    if (!source.length) return null
    const data = source[0]

    const mediaItem = data?.media?.[0]
    const rawUrl =
      mediaItem?.uri || mediaItem?.dataUrl || mediaItem?.data?.uri || mediaItem?.data?.dataUrl || ''

    const videoUrl = rawUrl
      ? rawUrl.startsWith('http') || rawUrl.startsWith('www')
        ? rawUrl
        : getAkamayUrl(rawUrl)
      : ''

    const transcriptText = mediaItem?.teaserText?.text || ''

    const ctas = getAdapterCTA(data?.teaserTargets) || []

    return {
      heading: data?.teaserTitle || '',
      bodyText: data?.teaserText?.text ? [data.teaserText.text] : [],
      cta: ctas[0] || null,
      ctaSecondary: ctas[1] || null,
      media: {
        type: 'video',
        url: videoUrl,
        transcriptText: transcriptText,
      },
      theme: data?.teaserOverlaySettings?.style?.textCls || 'leaf',
      layout: data?.viewtype === 'm10VideoLeft' ? 'video-left' : 'video-right',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
