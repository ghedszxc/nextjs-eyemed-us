import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import AppConfig from '@/lib/AppConfig'
import { TM12Column } from '../../types'
import styles from './styles/index.module.scss'
// import styles from '../../styles/index.module.scss'

const TitleImageColumn = ({ title, text, caption, image, cls }: TM12Column) => {
  return (
    <div className={clsx(styles.TitleImageColumn, cls)}>
      <div></div>

      <div className={clsx(styles['content'], 'column-content')}>
        {title && (
          <AnimateSwipe>
            <h2>{title}</h2>
          </AnimateSwipe>
        )}
        {text && <AnimateSwipe>{AppConfig.html(text || '')}</AnimateSwipe>}
        {/* {text && <AnimateSwipe>{AppConfig.html(text1 || '')}</AnimateSwipe>} */}
      </div>

      {image?.href && (
        <AnimateSwipe className={styles['image']}>
          <Image
            src={image?.href || ''}
            alt={image?.alt || ''}
            // layout="responsive"
            width={500}
            height={300}
            unoptimized
          />
        </AnimateSwipe>
      )}
      <AnimateSwipe className={styles['caption']}>{AppConfig.html(caption || '')}</AnimateSwipe>
    </div>
  )
}

export default TitleImageColumn
