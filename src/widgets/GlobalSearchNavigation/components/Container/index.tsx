import React from 'react'
import styles from './styles/index.module.scss'

const GlobalSearchNavigationContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>
}

export default GlobalSearchNavigationContainer
