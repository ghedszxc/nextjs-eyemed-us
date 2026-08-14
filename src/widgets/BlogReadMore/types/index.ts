import { ThemeColor } from '@/types/theme'

export interface IBlogReadMore {
  theme?: ThemeColor
  title?: string

  items?: IItems[]
}
export interface IItems {
  picture?: any
  fallbackImage?: string
  image?: any
  text: string
  url: string
}
