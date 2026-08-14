import React from 'react'
import clsx from 'clsx'
import styles from './styles/index.module.scss'
import { TBlogBanner } from './types'
import { WIDGET_ARIA_LABELS } from '@/lib/constants/WIDGET_ARIA_LABELS'
import { BLOG_WIDGETS } from '@/lib/constants/BLOG_CONSTANTS'
import SharePrint from './components/SharePrint'

const BlogBanner: React.FC<TBlogBanner> = ({
  title = '',
  categoryText = '',
  image,
  date = '',
  socialTitle = '',
  externalLinks = [],
  theme = 'leaf',
  author,
}) => {
  return (
    <section
      className={clsx(styles['blog-banner'], styles[theme])}
      aria-label={`${WIDGET_ARIA_LABELS[BLOG_WIDGETS.blogBanner]} ${title}`}
    >
      <div className={styles['banner-content']}>
        <h2>{title}</h2>
        <div>
          <img className={styles['banner-image']} src={image} alt={title} />
          <h6>{categoryText}</h6>
        </div>
        <div className={styles['banner-actions']}>
          <div className={styles['blog-author-container']}>
            {author?.image ? (
              <>
                <img
                  src={author?.image}
                  className={styles['blog-author-image']}
                  alt={`image of this article's author, ${author?.name}`}
                />
                <div className={styles['blog-author']}>
                  <h5>{author?.name}</h5>
                  <em>{author?.desc}</em>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <SharePrint socialTitle={socialTitle} externalLinks={externalLinks} />
        </div>
        <div>{date && <span>{date}</span>}</div>
      </div>
    </section>
  )
}

export default BlogBanner
