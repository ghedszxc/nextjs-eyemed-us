// Modules
import { IM16BlogPostBanner } from './types'
import styles from './styles/index.module.scss'

// Components
import Container from '@/components/UI/Container'

const M16BlogPostBanner = ({ title, picture, theme = 'grape' }: IM16BlogPostBanner) => {

  return (
    <Container variant="white">
      <div className={`${styles['m16_blog_post_banner']} ${styles[theme]}`}>
        {picture && (
          <img src={picture} alt="Powered by EyeMed Logo" className={styles['m16_blog_post_banner_logo']} />
        )}
        {title && (
          <div className={styles['m16_blog_post_banner_content']}>
            <h2 className={styles['m16_blog_post_banner_message']}>{title}</h2>
          </div>
        )}
      </div>
    </Container>
  )
}
export default M16BlogPostBanner
