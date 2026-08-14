// Modules
import { IM03ConstituentAction } from './types'
import styles from './styles/index.module.scss'
import clsx from 'clsx'
import { ThemeColor } from '@/types/theme'
import AppConfig from '@/lib/AppConfig'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Container from '@/components/UI/Container'
import CTAClientWrapper from '@/components/CTAClientWrapper'

const M03ConstituentAction = ({
  title,
  subtitle,
  theme,
  cta,
  globalTheme,
}: IM03ConstituentAction) => {
  const dynamicTheme = theme || globalTheme || 'leaf'

  return (
    <Container>
      <AnimateSwipe>
        <div className={styles['mo3']}>
          <div className={styles['mo3_container']}>
            <h2 className={clsx(styles[`mo3_title_${dynamicTheme}`])}>{title}</h2>
            <div className={clsx(styles[`mo3_description_${dynamicTheme}`])}>
              {AppConfig.html(subtitle)}
            </div>
            {cta && (
              <CTAClientWrapper
                cta={cta}
                theme={dynamicTheme as ThemeColor}
                variant="primary"
                noUnderline
                className={styles['mo3_button']}
              />
            )}
          </div>
        </div>
      </AnimateSwipe>
    </Container>
  )
}
export default M03ConstituentAction
