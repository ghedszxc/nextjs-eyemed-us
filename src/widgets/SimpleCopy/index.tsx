// Modules
import { ISimpleCopy } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'

// Components
import Typography from '@/components/UI/Typography'
import Container from '@/components/UI/Container'

const SimpleCopy = ({ title, body, theme = 'leaf' }: ISimpleCopy) => {
  return (
    <Container>
      <div className={`${styles.simpleCopy} ${styles[`theme-${theme}`]}`}>
        {title && (
          <Typography as="h2" fontSize="6xl" className={styles.title}>
            {title}
          </Typography>
        )}
        {body && (
          <div className={styles.body}>
            {AppConfig.html(body)}
          </div>
        )}
      </div>
    </Container>
  )
}

export default SimpleCopy
