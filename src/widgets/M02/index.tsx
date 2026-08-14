// Modules
import { IM02 } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'
import { ThemeColor } from '@/types/theme'
import clsx from 'clsx'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Anchor from '@/components/shared/Anchor'
import Icon from '@/components/UI/Icon'

const M02 = ({ items }: IM02) => {
  // Hooks
  const getComponents = () => {
    return items?.map(({ cls, theme, icon, text, cta }, key) => (
      <div key={key} className={clsx(styles[`mo2_${theme}`], cls)}>
        <Anchor href={cta?.url || '#'} isExternal={cta?.isExternal}>
          <div className={styles['mo2_container__sub']}>
            <Icon
              src={icon}
              color={theme as ThemeColor}
              className={clsx(styles[`mo2_${theme}__icon`])}
            />

            <div className={styles['mo2_container__subtext']}>{AppConfig.html(text)}</div>
          </div>
        </Anchor>
      </div>
    ))
  }
  // Variables
  // Functions
  // Effects

  return (
    <AnimateSwipe>
      <div className={styles['mo2']}>
        <div className={styles['mo2_container']}>{getComponents()}</div>
      </div>
    </AnimateSwipe>
  )
}
export default M02
