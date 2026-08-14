import clsx from 'clsx'
import { IM15 } from './types'
import styles from './styles/index.module.scss'
import Resource from '@/components/Resource'

const M15 = ({ theme, title, items, globalTheme, index }: IM15) => {
  const themeName = theme || globalTheme || 'leaf'
  const isFirst = index && index < 2

  return (
    <div className={clsx(styles.m15, styles[themeName], { [styles.first]: isFirst })}>
      <div className={styles.container}>
        <h3>{title}</h3>
        <div className={styles.row}>
          {items?.map((data, key) => <Resource className={styles.item} {...data} key={key} />)}
        </div>
      </div>
    </div>
  )
}

export default M15
