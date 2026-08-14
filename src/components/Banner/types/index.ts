import { TWidgetImages, ThemeColor } from '@/types/theme'

export type TBanner = {
  images?: TWidgetImages
  theme?: ThemeColor
  bannerTitle?: string
  bannerText?: string
  showTopBanner?: boolean
  topTitle?: string
  topText?: string
  isShort?: boolean
  showHero?: boolean
  isCard?: boolean
  ctas?: {
    href: string
    text?: string
    isExternal?: boolean
    ctaStyle?: string
  }[]
  links?: { href?: string; text: string }[]
  globalTheme?: ThemeColor | ''
}
