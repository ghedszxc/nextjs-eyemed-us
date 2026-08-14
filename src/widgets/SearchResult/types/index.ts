import { ThemeColor } from '@/types/theme'

export type BlogItem = {
  image: string
  caption: string
  title: string
  description: string
  url: string
  alt?: string
} & {
  theme?: ThemeColor
}

export type BlogSearch = {
  blogs?: BlogItem[]
  theme?: ThemeColor
  resultCount?: number
  noFoundMessage?: string
  lang?: string
  searchParams?: {
    blog_search?: string
    pageNum?: number
  }
  resultMsg?: string
}
