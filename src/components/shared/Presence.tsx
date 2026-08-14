'use client'
// Modules
import { Children, ReactNode, cloneElement, useEffect, useState } from 'react'

// Components

type IPresenceProps = {
  children: ReactNode
  render: boolean
  initial: string
  animate: string
  className?: string
}

const Presence: React.FC<IPresenceProps> = ({ children, render, animate, initial, className }) => {
  // Hooks
  const [show, setShow] = useState(false)
  const [startAnim, setStartAnim] = useState(false)

  // Variables
  const childLength = Children.count(children)

  useEffect(() => {
    let cleanup: (() => void) | undefined

    if (render) {
      setShow(true)
      setStartAnim(true)
    } else {
      setStartAnim(false)
      const timeout = setTimeout(() => setShow(false), 500)
      cleanup = () => clearTimeout(timeout)
    }

    return cleanup
  }, [render, show])

  return (
    <>
      {children &&
        (render || show) &&
        Children.map(childLength > 1 ? children : [children], (child: any, key) =>
          cloneElement(<div>{child}</div>, {
            key: key,
            className: `transition-all duration-300 ${startAnim ? animate : initial} ${className ? className : ''}`,
          })
        )}
    </>
  )
}
export default Presence
