import { ThemeColor } from '@/types/theme'
import IconClient, { IconTypeSVG } from './components/IconClient'
import IconServer from './components/IconServer'

export type IconType = IconTypeSVG

type LocalIconProps = {
  type: IconType
  src?: never
}

type CMIconProps = {
  src: string
  type?: never
}

export type IconProps = (LocalIconProps | CMIconProps) & {
  color?: ThemeColor
  size?: number | string
} & React.ComponentPropsWithRef<'svg'>

export default function Icon(props: IconProps) {
  const isServer = typeof window === 'undefined'
  if (isServer && props.src) return <IconServer {...props} />
  return <IconClient {...props} />
}
