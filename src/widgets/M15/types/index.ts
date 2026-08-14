import { ThemeColor } from '@/types/theme'
import { IResource } from '@/components/Resource/types'

export interface IM15 {
  theme: ThemeColor
  title: string
  items: IResource[]
  globalTheme?: ThemeColor
  index?: number
}
