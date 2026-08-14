// Modules
import { IM16RichTextArticle } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import AppConfig from '@/lib/AppConfig'

// Components
import Typography from '@/components/UI/Typography'
import Container from '@/components/UI/Container'

const M16RichTextArticle = ({
  title,
  introText,
  body,
  theme,
  globalTheme,
  isPageLevel,
}: IM16RichTextArticle) => {
  const dynamicTheme = theme || globalTheme || 'leaf'

  if (!body) {
    return null
  }

  return (
    <Container variant="white">
      <div
        className={`${styles['m16_article']} ${dynamicTheme ? styles[`theme-${dynamicTheme}`] : ''} ${
          isPageLevel ? styles['m16_article_page_level'] : ''
        }`}
      >
        {title && (
          <Typography
            as="h1"
            color={dynamicTheme as ThemeColor}
            className={styles['m16_article_title']}
          >
            {title}
          </Typography>
        )}

        {introText && <div className={styles['m16_article_intro']}>{introText}</div>}

        {body && (
          <div
            className={`${styles['m16_article_body']} ${!title ? styles['m16_article_body_no_title'] : ''}`}
          >
            {AppConfig.html(body)}
          </div>
        )}
      </div>
    </Container>
  )
}
export default M16RichTextArticle
