import React from 'react'
import clsx from 'clsx'
import style from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import ConditionalWrapper from '@/components/shared/ConditionalWrapper'
import Anchor from '@/components/shared/Anchor'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  theme?: ThemeColor
  fullWidth?: boolean
  animate?: boolean
  mobile?: boolean
  href?: string
  isExternal?: boolean
  noUnderline?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  theme = 'leaf',
  animate = false,
  mobile = false,
  fullWidth = false,
  href,
  isExternal,
  noUnderline = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const isLink = !!href

  const props = {
    className: clsx(
      'btn',
      style.main,
      style[variant],
      style[theme],
      {
        [style.fullWidth]: fullWidth,
        [style.animate]: animate,
        [style.mobile]: mobile,
        [style.noUnderline]: noUnderline,
      },
      className
    ),
    ...(isLink ? { href, isExternal } : {}),
    ...rest,
  }

  return (
    <ConditionalWrapper wrapper={Anchor} fallback="button" condition={isLink} {...(props as any)}>
      {leftIcon}
      {children}
      {rightIcon}
    </ConditionalWrapper>
  )
}

export default Button
