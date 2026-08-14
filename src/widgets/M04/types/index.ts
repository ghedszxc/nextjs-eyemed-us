import { TWidgetAlignment, ThemeColor } from '@/types/theme'

import { ICta } from '@/models/ICta'

export interface IM04 {
  theme: string
  icon?: string
  title?: string
  subtitle?: string
  alignment?: TWidgetAlignment
  cta?: ICta
  picture?: any
  globalTheme?: ThemeColor
}
