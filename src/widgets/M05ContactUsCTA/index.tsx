// Modules
import { IM05ContactUsCTA } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import AppConfig from '@/lib/AppConfig'
import clsx from 'clsx'

// Components
import ResponsiveImage from '@/components/ResponsiveImage'
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Typography from '@/components/UI/Typography'
import Container from '@/components/UI/Container'
import Icon from '@/components/UI/Icon'
import CTAClientWrapper from '@/components/CTAClientWrapper'

const M05ContactUsCTA = ({
  images,
  icon,
  title,
  subtitle,
  theme = 'leaf',
  cta,
}: IM05ContactUsCTA) => {
  // hooks
  const themeName = theme || 'leaf'

  return (
    <Container variant="gray" noPaddingMobile noPaddingTablet>
      <AnimateSwipe>
        <div className={`${styles['mo5']} ${styles[themeName]}`}>
          <div className={styles['mo5_container']}>
            <div className={styles['mo5_image']}>
              <ResponsiveImage
                desktop={images?.desktopImg}
                mobile={images?.mobileImg}
                classNames={clsx(styles['m05_image'])}
              />
            </div>

            <div className={styles['mo5_content']}>
              {icon && <Icon src={icon || ''} color="white" className={styles['mo5_icon']} />}

              <Typography as="h2" color="white" fontSize="6xl" className={styles['mo5_title']}>
                {title}
              </Typography>

              <div className={styles['mo5_subtitle']}>{AppConfig.html(subtitle)}</div>

              <CTAClientWrapper
                cta={cta}
                theme={themeName as ThemeColor}
                variant="secondary"
                noUnderline
                className={styles['mo5_button']}
              />
            </div>
          </div>
        </div>
      </AnimateSwipe>
    </Container>
  )
}

export default M05ContactUsCTA
