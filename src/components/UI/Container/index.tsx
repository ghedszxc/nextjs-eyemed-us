import React from 'react'
import clsx from 'clsx'
import { ContainerProps } from './types'
import styles from './styles/index.module.scss'

const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'white',
  className,
  as: Component = 'div',
  noPaddingMobile = false,
  noPaddingTablet = false,
  noPaddingDesktop = false,
  ...rest
}) => {
  const containerClasses = clsx(
    styles.container,
    styles[`variant-${variant}`],
    className
  )

  const contentClasses = clsx(
    styles.content,
    {
      [styles['no-padding-mobile']]: noPaddingMobile,
      [styles['no-padding-tablet']]: noPaddingTablet,
      [styles['no-padding-desktop']]: noPaddingDesktop,
    }
  )

  return (
    <Component className={containerClasses} {...rest}>
      <div className={contentClasses}>
        {children}
      </div>
    </Component>
  )
}

export default Container