// Modules
import { IBlogFeaturedPostCard } from './types'
import styles from './styles/index.module.scss'
import clsx from 'clsx'
import { truncateText } from '@/lib/utilities'

// Components
import Anchor from '@/components/shared/Anchor'
import ResponsiveImage from '@/components/ResponsiveImage'

const BlogFeaturedPostCard = ({
  theme,
  date,
  title,
  text,
  url,
  picture,
  subtext,
}: IBlogFeaturedPostCard) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className={styles['blog_featured_post_card']}>
      <Anchor
        className={clsx('blog-card', styles[`blog_container_${theme}`])}
        href={url || '#'}
        title={title}
      >
        <div>
          <ResponsiveImage
            desktop={picture?.desktopImg}
            mobile={picture?.mobileImg}
            classNames={clsx(styles[`blog_container_${theme}__img`])}
          />

          {subtext && (
            <h6 className={clsx(styles[`blog_container_${theme}__subtext`])}>{subtext}</h6>
          )}
        </div>

        <div className={styles['blog_card']}>
          {date && <p>{date}</p>}
          {title && <h2>{truncateText(title, 49)}</h2>}
          {text && <div className={styles['blog_text']}>{truncateText(text, 91)}</div>}
          <p className={clsx(styles[`blog_anchor_${theme}`])}>Read more</p>
        </div>
      </Anchor>
    </div>
  )
}
export default BlogFeaturedPostCard
