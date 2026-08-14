// Modules
import { IContactForm } from './types'
import styles from './styles/index.module.scss'

// Components
import Container from '@/components/UI/Container'
import SupportCard from './SupportCard'

const ContactForm = ({ supportCards }: IContactForm) => {
  return (
    <Container>
      <div className={styles['contact-form']}>
        <div className={styles['cards-container']}>
          {supportCards?.map((card, index) => <SupportCard key={index} {...card} />)}
        </div>
      </div>
    </Container>
  )
}

export default ContactForm
