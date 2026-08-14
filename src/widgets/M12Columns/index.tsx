import React, { ComponentType } from 'react'
import styles from './styles/index.module.scss'
import { TM12Columns } from './types'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { ThemeColor } from '@/types/theme'

interface Column {
  [key: string]: ComponentType<any> | null
}

const ColumnComponent: Column = {
  TitleImageColumn: dynamic(() => import('./component/TitleImageColumn')),
  DefaultContentColumn: dynamic(() => import('./component/DefaultContentColumn')),
}

const M12Columns: React.FC<TM12Columns> = ({
  theme,
  collection = [],
  variant = 'default',
  globalTheme,
}) => {
  if (collection?.length === 0) {
    return null
  }
  const dynamicTheme = theme || globalTheme || 'leaf'

  return (
    <div className={styles.m12Columns}>
      <div className={clsx(styles['container'], styles[dynamicTheme as ThemeColor])}>
        {collection.map((item, index) => {
          if (variant) {
            const ColumnDisplay = ColumnComponent[variant]
            // Add null check before rendering
            if (!ColumnDisplay) {
              return null
            }
            return <ColumnDisplay key={index} {...item} />
          }

          return null
        })}
      </div>
    </div>
  )
}

export default M12Columns
