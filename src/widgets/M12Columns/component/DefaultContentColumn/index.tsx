import React from 'react'
import Image from 'next/image'
import styles from './styles/index.modules.scss'
import clsx from 'clsx'
import { TM12Column } from '../../types'
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import AppConfig from '@/lib/AppConfig'

const DefaultContentColumn = ({ title1, title2, text1, text2, image, cls }: TM12Column) => {
  return (
    <div className={clsx(styles.defaultContentColumn, cls)}>
      {image?.href === '' && <div></div>}
      <div
        className={clsx(
          styles['content'],
          'column-content',
          text2 && image?.href === '' && styles['centered']
        )}
      >
        {title1 && (
          <AnimateSwipe>
            <h6 className="align--center">{AppConfig?.html(title1)}</h6>
            <div className="text-big align--center">{AppConfig?.html(title2)}</div>
            {title2 !== '' ? (
              AppConfig?.html(text1)
            ) : (
              <div className="text-big align--center">{AppConfig?.html(text1)}</div>
            )}
          </AnimateSwipe>
        )}

        {text2 && <AnimateSwipe>{AppConfig?.html(text2)}</AnimateSwipe>}
      </div>

      {image?.href ? (
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
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default DefaultContentColumn
