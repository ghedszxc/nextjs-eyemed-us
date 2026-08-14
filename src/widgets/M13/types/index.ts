import { IFeatureListing } from '@/models/IFeatureListing'
import { ThemeColor } from '@/types/theme'

export interface TM13 {
  theme?: ThemeColor
  title?: string
  subtitle?: string
  features?: IFeatureListing[]
  subtitle2?: string
}
