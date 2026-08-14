// Modules
import { IBlogSidebarStayConnected } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'
import Icon from '@/components/UI/Icon'
import { ThemeColor } from '@/types/theme'

// Components
import Button from '@/components/UI/Button'

const BlogSidebarStayConnected = ({
  icon,
  subtitle,
  theme = 'grape',
  cta,
}: IBlogSidebarStayConnected) => {
  // Hooks
  // Variables
  const themeName = theme || 'grape'
  // Functions
  // Effects

  return (
    <div className={`${styles['stay_connected']} ${styles[`theme-${themeName}`]}`}>
      <div className={styles['stay_connected_content']}>
        {icon && (
          <Icon src={icon} color="white" className={styles['stay_connected_icon']} size={48} />
        )}
        <div className={styles['stay_connected_subtitle']}>{AppConfig.html(subtitle)}</div>
        {cta && (
          <Button
            href={cta.url}
            theme={themeName as ThemeColor}
            variant="secondary"
            noUnderline
            animate
            fullWidth
          >
            {cta.label}
          </Button>
        )}
      </div>
    </div>
  )
}
export default BlogSidebarStayConnected
