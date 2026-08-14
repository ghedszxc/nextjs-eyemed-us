export type ContainerVariant = 'white' | 'gray'

export interface ContainerProps {
  children: React.ReactNode
  variant?: ContainerVariant
  className?: string
  as?: React.ElementType
  // Padding control props
  noPaddingMobile?: boolean
  noPaddingTablet?: boolean
  noPaddingDesktop?: boolean
}