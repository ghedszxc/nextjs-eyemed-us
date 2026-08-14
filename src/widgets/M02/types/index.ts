import { ICta } from '@/models/ICta'

export interface IM02 {
  items?: IItems[]
}
export interface IItems {
  cls?: string[]
  theme: string
  icon: string
  text: string
  cta?: ICta
}
