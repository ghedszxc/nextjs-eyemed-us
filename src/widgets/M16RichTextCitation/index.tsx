// Modules
import { IM16RichTextCitation } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Container from '@/components/UI/Container'

const M16RichTextCitation = ({ body, theme, globalTheme, isPageLevel }: IM16RichTextCitation) => {
  const dynamicTheme = theme || globalTheme || 'moon'

  return (
    <Container variant="gray">
      <AnimateSwipe>
        <div
          className={`${styles['m16_citation']} ${dynamicTheme ? styles[`theme-${dynamicTheme}`] : ''} ${
            isPageLevel ? styles['m16_citation_page_level'] : ''
          }`}
        >
          {/* {title && (
            <Typography as="h3" color={dynamicTheme as ThemeColor} className={styles['m16_citation_title']}>
              {title}
            </Typography>
          )} */}

          {body && <div className={styles['m16_citation_body']}>{AppConfig.html(body)}</div>}
        </div>
      </AnimateSwipe>
    </Container>
  )
}

export default M16RichTextCitation
