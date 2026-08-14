import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IM06 {
  theme: string
  title?: string
  subtitle?: string
  subtitleAlignment: string

  footNote?: string
  cta?: ICta

  items?: IItems[]
  globalTheme?: ThemeColor
}
export interface IItems {
  cls?: string[]
  type: string
  picture?: any
  fallbackImage?: string
  videoUrl?: string

  theme: ThemeColor
  icon: string
  title?: string
  titleTagHeader?: string
  subtitle?: string
  cta?: ICta
}

export interface IDialog {
  dialog: boolean
  videoUrl?: string
}
