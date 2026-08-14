// Modules
import { IBlogSidebarRelatedArticle } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'

// Components
import Button from '@/components/UI/Button'
import ResponsiveImage from '@/components/ResponsiveImage'

const BlogSidebarRelatedArticle = ({ image, title, cta }: IBlogSidebarRelatedArticle) => {
  return (
    <div className={styles['related_article']}>
      <hr />
      {image && (
        <div className={styles['related_article_image']}>
          <ResponsiveImage desktop={image?.desktopImg} mobile={image?.mobileImg} />
          {/* <img src={image.url} alt={image.alt} /> */}
        </div>
      )}

      <div className={styles['related_article_content']}>
        <h3 className={styles['related_article_title']}>{AppConfig.html(title)}</h3>

        {cta && (
          <Button href={cta.url} theme="grape" variant="primary" noUnderline animate fullWidth>
            {cta.label}
          </Button>
        )}
      </div>
    </div>
  )
}

export default BlogSidebarRelatedArticle
