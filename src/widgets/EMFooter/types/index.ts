import { ICta } from '@/models/ICta'
import { TWidgetImages } from '@/widgets/types'

export interface IFooter {
  imageLinks?: {
    image?: TWidgetImages
    cta?: ICta
  }[]
  socialLinks?: {
    image?: string
    altText?: string
    cta?: ICta
  }[]
  mainLinks?: ICta[][]
  subLinks?: ICta[]
  privacyLink?: {
    image?: string
    cta?: ICta
  }
  contactLink?: ICta
}
