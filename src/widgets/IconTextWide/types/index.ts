import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IIconTextWide {
  theme?: ThemeColor
  icon: string
  title?: string
  subtitle?: string
  cta?: ICta
  globalTheme?: ThemeColor
}
