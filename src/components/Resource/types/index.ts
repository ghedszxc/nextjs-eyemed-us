import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IResource {
  className?: string
  icon?: string
  cta?: ICta
  hasDownload?: boolean
  textLimit?: number
  theme?: ThemeColor
  cls?: string[]
}
