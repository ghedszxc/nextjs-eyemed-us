import { ThemeColor } from '@/types/theme'

export type TM12Columns = {
  collection?: TM12Column[]
  theme?: ThemeColor
  variant?: TM12Variants
  globalTheme?: ThemeColor | ''
}

export type TM12Variants = 'TextImageColumn' | 'default'

export type TM12Column = {
  cls?: string
  title?: string
  title1?: string
  title2?: string
  text?: string
  text1?: string
  text2?: string
  caption?: string
  image?: {
    href?: string
    alt?: string
  }
}
