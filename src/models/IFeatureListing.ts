import { ThemeColor, TWidgetImages } from '@/types/theme'
import { ICta } from './ICta'

export interface IFeatureListing {
  cls?: string[]
  theme?: ThemeColor
  icon?: string
  titleType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title?: string
  subtitle?: string
  image?: TWidgetImages
  cta?: ICta
}
