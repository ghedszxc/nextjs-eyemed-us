// Modules
import { IIconTextWide } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import clsx from 'clsx'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'
import AppConfig from '@/lib/AppConfig'

const IconTextWide = ({ theme, icon, title, subtitle, cta, globalTheme }: IIconTextWide) => {
  // Hooks
  const dynamicTheme = theme || globalTheme || 'leaf'
  // Variables
  // Functions
  // Effects

  return (
    <AnimateSwipe>
      <div className={styles['iconTextWide']}>
        <div className={styles['iconTextWide_container']}>
          <div className={clsx(styles[`iconTextWide_${dynamicTheme}_theme`])}>
            <div className={clsx(styles[`iconTextWide_${dynamicTheme}_theme__card`])}>
              <div className={clsx(styles[`iconTextWide_${dynamicTheme}_theme__body`])}>
                {icon && (
                  <Icon
                    src={icon || ''}
                    color={dynamicTheme as ThemeColor}
                    className={clsx(styles[`iconTextWide_${dynamicTheme}_theme__icon`])}
                  />
                )}

                <div className={clsx(styles[`iconTextWide_${dynamicTheme}_theme__sub_body`])}>
                  {title && (
                    <h2 className={clsx(styles[`iconTextWide_${dynamicTheme}_theme__title`])}>
                      {title}
                    </h2>
                  )}

                  {subtitle && (
                    <div className={clsx(styles[`iconTextWide_${dynamicTheme}_theme__subtitle`])}>
                      {AppConfig.html(subtitle)}
                    </div>
                  )}

                  {cta && (
                    <Button
                      href={cta.url}
                      theme={dynamicTheme as ThemeColor}
                      variant="primary"
                      noUnderline
                      isExternal={cta.isExternal}
                    >
                      {cta.label}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateSwipe>
  )
}
export default IconTextWide
