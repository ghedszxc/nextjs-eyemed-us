import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IBlogTopNavigation {
  theme?: ThemeColor
  icon?: string
  title?: string
  searchTitle?: string

  placeholder?: string
  cta?: ICta
  items?: IItems[]
}

export interface IItems {
  url?: string
  label?: string
  color?: ThemeColor
}
