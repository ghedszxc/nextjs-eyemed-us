import { ThemeColor } from '@/types/theme'
import { IconType } from '@/components/UI/Icon'

export interface ISupportCardItem {
  icon?: IconType
  iconNode?: React.ReactNode
  src?: string
  text?: string
}

export interface ISupportCardSection {
  heading?: string
  items?: ISupportCardItem[]
}

export interface ISupportCard {
  cls?: string[]
  theme?: ThemeColor
  image?: string
  title?: string
  ctaText?: string
  ctaUrl?: string
  sections?: ISupportCardSection[]
}

export interface IContactForm {
  title?: string
  supportCards?: ISupportCard[]
}
