// Modules
import { IM16RichTextBlogPostNote } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import AppConfig from '@/lib/AppConfig'

// Components
import Typography from '@/components/UI/Typography'
import Container from '@/components/UI/Container'

const M16RichTextBlogPostNote = ({ title, body, theme = 'grape' }: IM16RichTextBlogPostNote) => {

  return (
    <Container variant="white">
      <div className={`${styles['m16_blog_post_note']} ${styles[theme]}`}>
        <div className={styles['m16_blog_post_note_container']}>
          {/* Purple header bar */}
          <div className={styles['m16_blog_post_note_header']}></div>

          {/* Light pink content area */}
          <div className={styles['m16_blog_post_note_content']}>
            {title && (
              <Typography
                as="h3"
                fontSize="lg"
                color={theme as ThemeColor}
                font="bold"
                className={styles['m16_blog_post_note_title']}
              >
                {title}
              </Typography>
            )}

            {body && <div className={styles['m16_blog_post_note_body']}>{AppConfig.html(body)}</div>}
          </div>
        </div>
      </div>
    </Container>
  )
}
export default M16RichTextBlogPostNote
