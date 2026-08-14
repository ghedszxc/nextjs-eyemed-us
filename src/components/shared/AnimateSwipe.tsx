// Modules
import { ReactNode, forwardRef, ForwardedRef } from 'react'

// Components
import AnimateOnScreen from './AnimateOnScreen'

type IAnimateSwipeProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  threshold?: number
}

const AnimateSwipe = forwardRef(
  (
    { children, className, style, threshold }: IAnimateSwipeProps,
    ref?: ForwardedRef<ReactNode | HTMLDivElement>
  ) => {
    // Hooks
    // Variables
    const styleVariants = {
      hide: { opacity: 0, transform: 'translateY(80px)' },
      show: { opacity: 1, transform: 'translateY(0px)' },
    }

    // Functions
    // Effects

    return (
      <AnimateOnScreen
        className={className + ' relative overflow-hidden'}
        styleVariants={styleVariants}
        start
        duration={0.6}
        easing="ease-out"
        inlineStyle={style}
        threshold={threshold}
        elemTarget={ref}
      >
        {children}
      </AnimateOnScreen>
    )
  }
)

AnimateSwipe.displayName = 'AnimateSwipe'

export default AnimateSwipe
