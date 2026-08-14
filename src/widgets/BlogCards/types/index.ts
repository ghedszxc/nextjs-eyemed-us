import { ThemeColor } from '@/types/theme'

export type TBlogCardsProps = {
  theme?: ThemeColor
  cards?: TCardProps[]
  articleCount?: number
  hasSidebar?: boolean
  currentPage?: number
}

export type TCardProps = {
  theme?: ThemeColor
  imageSrc?: string
  title?: string
  date?: string
  description?: string
  category?: string
  link?: string
  articeUrl?: string
  altText?: string
}
