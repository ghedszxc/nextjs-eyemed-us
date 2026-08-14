import React, { useEffect, useRef } from 'react'

interface DropdownNavMobileProps extends React.HTMLAttributes<HTMLUListElement> {
  isExpanded?: boolean
  children?: React.ReactNode
}

const DropdownNavMobile: React.FC<DropdownNavMobileProps> = ({
  isExpanded,
  children,
  ...props
}) => {
  const contentRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const handleTransitionEnd = () => {
      if (!el) return
      el.removeAttribute('style')
      if (!isExpanded) el.style.display = 'none'
      el.removeEventListener('transitionend', handleTransitionEnd)
    }

    if (isExpanded) {
      el.style.display = 'block'
      const fullHeight = el.scrollHeight
      el.style.height = '0px'
      el.style.overflow = 'hidden'
      el.style.transition = 'height 0.3s ease'

      requestAnimationFrame(() => {
        el.style.height = `${fullHeight}px`
      })
    } else {
      const fullHeight = el.scrollHeight
      el.style.height = `${fullHeight}px`
      el.style.overflow = 'hidden'
      el.style.transition = 'height 0.3s ease'

      requestAnimationFrame(() => {
        el.style.height = '0px'
      })
    }

    el.addEventListener('transitionend', handleTransitionEnd)
  }, [isExpanded])

  return (
    <ul ref={contentRef} {...props}>
      {children}
    </ul>
  )
}

export default DropdownNavMobile
