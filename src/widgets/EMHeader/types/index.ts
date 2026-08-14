import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IHeader {
  logo?: {
    image?: string
    cta?: ICta
  }
  pages?: Page[]
  loginOptions?: Page
  searchLabel?: string
  cta?: ICta[]
  crumbs?: ICta[]
}

export interface Page {
  header?: ICta
  pages?: Page[]
  color?: ThemeColor
}
