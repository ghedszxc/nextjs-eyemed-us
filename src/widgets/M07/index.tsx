// Modules
import { IM07, IItems } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'
import { ThemeColor } from '@/types/theme'
import clsx from 'clsx'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Icon from '@/components/UI/Icon'
import CTAClientWrapper from '@/components/CTAClientWrapper'

const M07 = ({ theme, title, subtitle, footNote, items, isQuiz, cta, globalTheme }: IM07) => {
  // Hooks
  const dynamicTheme = theme || globalTheme || 'leaf'

  const getComponents = () => {
    return items?.map((data: IItems, key: number) => {
      return (
        <div key={key} className={clsx(styles[`mo7_${dynamicTheme}_theme`], data?.cls)}>
          <div className={clsx(styles[`mo7_${dynamicTheme}_theme__card`])}>
            <div className={clsx(styles[`mo7_${dynamicTheme}_theme__body`])}>
              {data.icon && (
                <Icon
                  src={data.icon}
                  color={dynamicTheme as ThemeColor}
                  className={clsx(styles[`mo7_${dynamicTheme}_theme__icon`])}
                />
              )}

              <div
                className={clsx(
                  styles[`mo7_${dynamicTheme}_theme__${data.icon ? 'with' : 'without'}Icon`]
                )}
              >
                {data.title && (
                  <h4 className={clsx(styles[`mo7_${dynamicTheme}_theme__title`])}>{data.title}</h4>
                )}
                {data.subtitle && (
                  <div className={clsx(styles[`mo7_${dynamicTheme}_theme__subtitle`])}>
                    {AppConfig.html(data.subtitle)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  // Variables
  // Functions
  // Effects

  return (
    <AnimateSwipe>
      <div className={styles['mo7']}>
        <div className={styles['mo7_container']}>
          <div className={clsx(styles[`mo7_card_${dynamicTheme}`])}>
            {title && <h2 id={isQuiz ? 'm07_title' : undefined}>{title}</h2>}
            {subtitle && (
              <div id={isQuiz ? 'm07_subtitle' : undefined}>{AppConfig.html(subtitle)}</div>
            )}
          </div>

          <div className={styles['mo7_container_items']}>{getComponents()}</div>

          {footNote && (
            <div
              id="m07_footNote"
              className={clsx(
                styles['m07_footNote'],
                styles[`${isQuiz && 'footNote_text_italic'}`]
              )}
            >
              {AppConfig.html(footNote)}
            </div>
          )}

          {isQuiz && cta && cta.label && (
            <div className={styles['m07_card_actions']}>
              <CTAClientWrapper
                cta={cta}
                theme={dynamicTheme as ThemeColor}
                variant="primary"
                noUnderline
                className={styles['m07_card_actions__button']}
              />
            </div>
          )}
        </div>
      </div>
    </AnimateSwipe>
  )
}
export default M07
