import React from 'react'
import styles from '../../styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import AppConfig from '@/lib/AppConfig'
import clsx from 'clsx'

type TTopBar = {
  theme?: ThemeColor
  isStandAlone?: boolean
  title?: string
  text?: string
}

const Topbar: React.FC<TTopBar> = ({ theme = 'leaf', isStandAlone, title = '', text = '' }) => {
  return (
    <div className={clsx(styles['topbar'], isStandAlone ? styles['shaded-bg'] : '')}>
      <div className={clsx(styles['topbar-container'], styles[theme])}>
        <div className={styles['topbar__wrapper']}>
          <h1>{AppConfig.html(title)}</h1>
          <div>{AppConfig.html(text)}</div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
