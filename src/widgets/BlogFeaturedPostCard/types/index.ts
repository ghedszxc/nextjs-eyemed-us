import { ThemeColor } from '@/types/theme'

export interface IBlogFeaturedPostCard {
  theme?: ThemeColor

  date?: string
  title?: string
  text?: string
  url?: string

  picture?: any
  subtext?: string
}
