import Link, { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

export interface AnchorProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  isExternal?: boolean
}

const Anchor = ({ children, isExternal, ...props }: AnchorProps) => {
  const { href, target, rel } = props

  if (!href) return null

  return (
    <Link
      {...props}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopener noreferrer' : rel}
    >
      {children}
    </Link>
  )
}

export default Anchor
