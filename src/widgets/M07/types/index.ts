import { IconType } from '@/components/UI/Icon'
import { ThemeColor } from '@/types/theme'
import { ICta } from '@/models/ICta'

export interface IM07 {
  theme: ThemeColor
  title?: string
  subtitle?: string
  footNote?: string
  items?: IItems[]
  isQuiz?: boolean
  cta?: ICta
  globalTheme?: ThemeColor
}
export interface IItems {
  icon?: IconType
  title?: string
  subtitle?: string
  cls?: string[]
}
