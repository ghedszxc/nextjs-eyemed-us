// Modules
import React from 'react'
import styles from './styles/index.module.scss'
import { TBlogSideBarFeatureArticle } from './types'
import clsx from 'clsx'

// Components
import Anchor from '@/components/shared/Anchor'
import ResponsiveImage from '@/components/ResponsiveImage'

const SideBarFeaturedArticle: React.FC<TBlogSideBarFeatureArticle> = ({
  url,
  image,
  title,
  text,
  theme = 'leaf',
}) => {
  return (
    <div className={clsx(styles['featured-blog-article'], styles[theme])}>
      <h5 className={styles.title}>{title}</h5>
      <Anchor href={url || '#'}>
        <ResponsiveImage desktop={image?.desktopImg} mobile={image?.mobileImg} />
        <p>{text}</p>
      </Anchor>
    </div>
  )
}

export default SideBarFeaturedArticle
