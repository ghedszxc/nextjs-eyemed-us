import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IM03ConstituentAction {
  title?: string
  subtitle?: string
  theme?: string
  cta?: ICta
  globalTheme?: ThemeColor
}
