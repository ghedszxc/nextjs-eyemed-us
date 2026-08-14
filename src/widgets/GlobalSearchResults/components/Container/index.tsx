import React from 'react'
import styles from './styles/index.module.scss'

const GlobalSearchResultContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>
}

export default GlobalSearchResultContainer
