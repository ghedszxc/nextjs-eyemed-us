import React from 'react'
import styles from './styles/index.module.scss'
const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Container
