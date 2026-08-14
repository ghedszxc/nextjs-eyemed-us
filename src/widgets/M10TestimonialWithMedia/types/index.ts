import { ThemeColor } from '@/types/theme'
import { ICta } from '@/models/ICta'

export interface IM10TestimonialWithMedia {
  heading: string
  bodyText: string[]
  cta?: ICta | null
  ctaSecondary?: ICta | null
  media: {
    type: 'video'
    url: string
    transcriptText?: string
  }
  theme?: ThemeColor,
  globalTheme?: ThemeColor
  layout?: 'video-right' | 'video-left'
}
