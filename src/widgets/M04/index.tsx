// Modules
import { IM04 } from './types/'
import styles from './styles/index.module.scss'
import clsx from 'clsx'
import AppConfig from '@/lib/AppConfig'
import { ThemeColor } from '@/types/theme'

// Components
import ResponsiveImage from '@/components/ResponsiveImage'
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Icon from '@/components/UI/Icon'
import CTAClientWrapper from '@/components/CTAClientWrapper'

const M04 = ({
  theme,
  icon,
  title,
  subtitle,
  alignment = 'left',
  cta,
  picture,
  globalTheme,
}: IM04) => {
  // Hooks
  const dynamicTheme = theme || globalTheme || 'leaf'

  // Variables
  // Functions
  // Effects

  return (
    <div className={styles['mo4']}>
      <div className={clsx(styles['mo4_container'])}>
        <div className={clsx(styles['mo4_container__inner'], styles[alignment])}>
          <div className={clsx(styles['mo4_text_card'])}>
            <div
              className={clsx(
                styles['mo4_text_card__featured_copy_wrap'],
                styles['m04_text_card__texts']
              )}
            >
              <AnimateSwipe>
                {icon && (
                  <Icon
                    src={icon || ''}
                    color={dynamicTheme as ThemeColor}
                    className={clsx(styles[`m04_text_card__icon_${dynamicTheme}`])}
                  />
                )}

                {title && (
                  <h2 className={clsx(styles[`mo4_text_card__title_${dynamicTheme}`])}>{title}</h2>
                )}

                {subtitle && (
                  <div className={styles[`mo4_text_card__subtitle_${dynamicTheme}`]}>
                    {AppConfig.html(subtitle)}
                  </div>
                )}

                <CTAClientWrapper
                  cta={cta}
                  theme={dynamicTheme as ThemeColor}
                  variant="primary"
                  noUnderline
                  className={styles[`mo4_text_card__button_${dynamicTheme}`]}
                />
              </AnimateSwipe>
            </div>
          </div>

          <div
            className={clsx(styles['mo4_text_card'], styles['mo4_text_card__featured_copy_wrap'])}
          >
            <div className={clsx(styles['mo4_text_card__image'])}>
              <div className={clsx(styles['mo4_text_card__image_column'])}>
                <div
                  className={clsx(
                    styles[
                      `mo4_text_card__${picture?.mobileImg?.isCropped ? 'image_landscape' : 'image_square'}`
                    ]
                  )}
                >
                  <ResponsiveImage
                    desktop={picture?.desktopImg}
                    mobile={picture?.mobileImg}
                    classNames={clsx(styles['m04_image'])}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default M04
