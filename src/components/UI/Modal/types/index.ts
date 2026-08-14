import { ReactNode } from 'react'
import { ThemeColor } from '@/types/theme'

export type ModalSize = 'small' | 'medium' | 'large' | 'full'

export interface IModal {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: ModalSize
  theme?: ThemeColor
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}