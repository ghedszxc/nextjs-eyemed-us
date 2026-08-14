import { ICta } from '@/models/ICta'
import { IFeatureListing } from '@/models/IFeatureListing'
import { ThemeColor } from '@/types/theme'

export interface TM08 {
  theme?: ThemeColor
  title?: string
  subtitle?: string
  banners?: IFeatureListing[]
  bannerImage?: IFeatureListing
  cta?: ICta
}
