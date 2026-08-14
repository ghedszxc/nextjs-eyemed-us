import { ElementType, ComponentPropsWithRef, ReactNode } from 'react'
import clsx from 'clsx'
import { TypographyBreakpoint, TypographyFont } from './types'
import { ThemeColor } from '@/types/theme'
import style from './styles/index.module.scss'

type TypographyProps<T extends ElementType = 'span'> = {
  children: ReactNode
  as?: T
  font?: TypographyFont
  fontSize?: TypographyBreakpoint
  color?: ThemeColor
  fontWeight?: string | number
  lineHeight?: string | number
  textAlign?: 'left' | 'right' | 'center' | 'justify'
  uppercase?: boolean
  capitalize?: boolean
  muted?: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikeThrough?: boolean
  noOfLines?: number
} & ComponentPropsWithRef<T>

const Typography = <T extends ElementType = 'span'>({
  children,
  as: Component = 'p',
  font,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  textAlign,
  uppercase,
  capitalize,
  muted,
  bold,
  italic,
  underline,
  strikeThrough,
  noOfLines,
  wordBreak,
  className,
  ...rest
}: TypographyProps<T>) => {
  const computedStyle = {
    lineHeight,
    textAlign,
    fontWeight,
    fontFamily: font ? `var(--font-${font})` : undefined,
    fontSize: fontSize ? `var(--text-size-${fontSize})` : undefined,
    '--line-clamp': noOfLines,
  } as React.CSSProperties

  return (
    <Component
      className={clsx(
        style.main,
        style[color],
        {
          [style.muted]: muted,
          [style.bold]: bold,
          [style.italic]: italic,
          [style.underline]: underline,
          [style.strikeThrough]: strikeThrough,
          [style.uppercase]: uppercase,
          [style.capitalize]: capitalize,
          [style.truncated]: !!noOfLines,
        },
        className
      )}
      style={computedStyle}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Typography
