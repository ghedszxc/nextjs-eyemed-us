import { ThemeColor } from '@/types/theme'

export interface IM16MediaLeftAndRight {
  title?: string
  body?: string
  media?: {
    type: 'video' | 'image'
    url: string
    alt?: string
  }
  theme?: ThemeColor
  globalTheme?: ThemeColor | ''
}
