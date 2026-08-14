import React from 'react'
import { TResponsiveImage } from './types'
import clsx from 'clsx'
import styles from './styles/index.module.scss'

const ResponsiveImageSSR: React.FC<TResponsiveImage> = ({ desktop, mobile, classNames }) => {
  return (
    <>
      <img
        src={desktop?.url}
        className={clsx(classNames, styles['image-desktop'])}
        alt={desktop?.alt}
      ></img>
      <img
        src={mobile?.url}
        className={clsx(classNames, styles['image-mobile'])}
        alt={mobile?.alt}
      ></img>
    </>
  )
}

export default ResponsiveImageSSR
