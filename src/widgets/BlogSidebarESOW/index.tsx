import React from 'react'
import styles from './styles/index.module.scss'
import { TBlogSideBarFeatureEsow } from './types'
import clsx from 'clsx'

const SideBarFeatureEsow: React.FC<TBlogSideBarFeatureEsow> = ({
  theme = 'grape',
  headerImage,
  items,
}) => {
  return (
    <div className={clsx(styles['blog-featured-esow'], styles[theme])}>
      <img src={headerImage} alt="esow-header-image" className={styles['header-image']} />

      {items?.length &&
        items?.map(({ title, cta, image }, key) => {
          return (
            <a
              key={key}
              href={cta?.url}
              target={cta?.isExternal ? '_blank' : '_self'}
              className={styles['anchor']}
              title={title}
            >
              <img src={image} alt={cta?.label} />
              {title}
            </a>
          )
        })}
    </div>
  )
}

export default SideBarFeatureEsow
