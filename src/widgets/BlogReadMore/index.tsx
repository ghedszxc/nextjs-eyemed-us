// Modules
import { IBlogReadMore } from './types'
import styles from './styles/index.module.scss'
import clsx from 'clsx'
import { truncateText } from '@/lib/utilities'

// Components
import Anchor from '@/components/shared/Anchor'

const BlogReadMore = ({ theme, title, items }: IBlogReadMore) => {
  const getComponents = () => {
    return items?.map(({ fallbackImage, text, url }, key) => (
      <Anchor key={key} href={url} className={styles['blog_item_anchor']} title={text}>
        <img src={fallbackImage || ''} alt="" className={styles['blog_item_image']} />
        <p className={styles['blog_item_text']}>{truncateText(text || '', 36)}</p>
      </Anchor>
    ))
  }

  return (
    <div className={styles['blog_read_more']} role="navigation">
      <div className={styles['blog_container']}>
        <h5 className={clsx(styles[`blog_title_${theme}`])}>{title}</h5>
        <div className={styles['blog_container_items']}>{getComponents()}</div>
      </div>
    </div>
  )
}
export default BlogReadMore
