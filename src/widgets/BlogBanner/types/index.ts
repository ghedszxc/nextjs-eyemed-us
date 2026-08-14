import { ThemeColor } from '@/types/theme'

export type TBlogBanner = {
  theme?: ThemeColor
  title?: string
  categoryText?: string
  image?: string
  date?: string
  shareable?: boolean
  socialTitle?: string
  externalLinks?: {
    logo?: string
    alt?: string
    url?: string
  }[]
  allowPrint?: boolean
  printIcon?: string
  author?:
    | {
        image: string
        name: string
        desc: string
      }
    | undefined
}
