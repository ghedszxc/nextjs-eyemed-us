import React from 'react'
import styles from '../../styles/index.module.scss'
import { TCardProps } from '../../types'
import clsx from 'clsx'
import { truncateText } from '@/lib/utilities'
import Anchor from '@/components/shared/Anchor'

const Card: React.FC<TCardProps> = ({
  theme = 'leaf',
  imageSrc,
  title,
  date,
  description,
  category,
  link,
  altText,
}) => {
  return (
    <Anchor
      href={link || ''}
      className={clsx('blog-card', styles['card'], styles[theme])}
      title={title}
    >
      {imageSrc && <img src={imageSrc || ''} alt={altText} />}
      {category && <h6>{category || ''}</h6>}
      <div className={styles['content']}>
        {date && <p className={styles['date']}>{date || ''}</p>}
        <h2 className={styles['card-header']}>{(title && truncateText(title, 46)) || ''}</h2>
        <div className={styles['card-description']}>
          <p>{(description && truncateText(description, 95)) || ''}</p>
        </div>
        {link && <span className={styles['link']}>Read more</span>}
      </div>
    </Anchor>
  )
}

export default Card
