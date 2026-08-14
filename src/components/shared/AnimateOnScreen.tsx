'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'

type AnimateProps = {
  styleVariants?: { hide: React.CSSProperties; show: React.CSSProperties }
  delay?: number
  duration?: number
  isFirstTime?: boolean
  className?: string
  element?: string
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'jump-start' | 'jump-end'
  disabled?: boolean
  start?: boolean
  threshold?: number
  elemTarget?: any
  children: ReactNode
  onAnimationStart?: (event: any) => void
  onAnimationEnd?: (event: any) => void
  onClick?: (event: any) => void
  inlineStyle?: any
}

const AnimateOnScreen: React.FC<AnimateProps> = ({
  children,
  styleVariants,
  duration = 1,
  delay = 0,
  isFirstTime = true,
  className,
  element = 'div',
  easing = 'ease',
  disabled = false,
  start,
  threshold = 0.1,
  elemTarget,
  onAnimationStart,
  onAnimationEnd,
  onClick,
  inlineStyle,
}) => {
  // VARIABLES
  const initialVariant = styleVariants?.hide
  const animateVariant = styleVariants?.show

  // HOOKS
  const elem = useRef(null)
  const isElemVisible = useOnScreen(elemTarget ? elemTarget : elem, {
    once: isFirstTime,
    tresholdValue: threshold,
  })

  const [variants, setVariants] = useState({
    transition: `${duration}s ${easing} ${delay}s`,
    ...(!disabled ? initialVariant : animateVariant),
  })

  // METHODS
  const onClickHandler = (event: any) => {
    if (onClick) onClick(event)
  }

  const onAnimationEndHandler = (event: any) => {
    if (onAnimationEnd) onAnimationEnd(event)
  }

  const onAnimationStartHandler = (event: any) => {
    if (onAnimationStart) onAnimationStart(event)
  }

  const dynamicTag = (content: React.ReactNode) => {
    return React.createElement(
      element,
      {
        className: `${className || ''}`,
        ref: elem,
        style: { ...variants, ...inlineStyle },
        onClick: event => onClickHandler(event),
        onAnimationStart: (event: any) => onAnimationStartHandler(event),
        onAnimationEnd: (event: any) => onAnimationEndHandler(event),
      },
      content
    )
  }

  // EFFECTS
  useEffect(() => {
    if (disabled) return
    if (isElemVisible && start) {
      setVariants(prev => ({
        ...prev,
        ...animateVariant,
        transition: `${duration}s ${easing} ${delay}s`,
      }))
    } else {
      setVariants(prev => ({
        ...prev,
        ...initialVariant,
        transition: 'none',
      }))
    }
  }, [isElemVisible, duration, delay, start, animateVariant, disabled, easing, initialVariant])

  return dynamicTag(children)
}

export default AnimateOnScreen
