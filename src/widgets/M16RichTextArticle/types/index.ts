import { ThemeColor } from '@/types/theme'
import { IAdapterCTAObj } from '@/lib/utilities'

export interface IRelatedFile {
  id?: string
  name?: string
  type?: string
  filename?: string
  title?: string
  teaserTargets?: IAdapterCTAObj[]
  [key: string]: any
}

export interface IM16RichTextArticle {
  title?: string
  introText?: string
  body?: string
  theme?: ThemeColor
  globalTheme?: ThemeColor | ''
  isPageLevel?: boolean
  related?: IRelatedFile[]
}
