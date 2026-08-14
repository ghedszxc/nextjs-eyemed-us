// Modules
import clsx from 'clsx'
import { ISupportCard } from './types'
import styles from './styles/index.module.scss'

// Components
import Icon from '@/components/UI/Icon'
import Typography from '@/components/UI/Typography'
import { SupportCardProvider } from './SupportCardProvider'
import SupportCardMobileToggle from './SupportCardMobileToggle'

const SupportCard = ({ cls, theme, image, title, ctaText, ctaUrl, sections }: ISupportCard) => {
  const themeName = theme || 'leaf'

  return (
    <SupportCardProvider>
      <div className={clsx(styles['support-card'], styles[themeName], cls)}>
        <div className={`${styles['card-image']} ${styles['desktop-only']}`}>
          <img src={image || ''} alt="" />
        </div>

        <div className={styles.content}>
          {title && (
            <Typography as="h2" fontSize="6xl" color={theme} className={styles['card-title']}>
              {title}
            </Typography>
          )}

          <a className={clsx('btn', styles['cta-button'])} href={ctaUrl || '#'}>
            {ctaText}
          </a>

          <div className={`${styles['collapsible-content']} ${styles['desktop-only']}`}>
            {sections &&
              sections?.map((section, sectionIndex) => (
                <ul key={sectionIndex} className={styles['list-unstyled']}>
                  {section.heading && (
                    <li>
                      <h3 className={styles['list-title']}>{section.heading}</h3>
                    </li>
                  )}
                  <ul className={styles['list-unstyled']}>
                    {section &&
                      section?.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <div>
                            <Icon
                              src={item?.src || ''}
                              color={theme}
                              size={55}
                              className={styles['item-icon']}
                            />
                          </div>
                          <span>{item.text}</span>
                        </li>
                      ))}
                  </ul>
                </ul>
              ))}
          </div>
        </div>

        <SupportCardMobileToggle
          sections={sections?.map(section => ({
            ...section,
            items: section?.items?.map(item => ({
              ...item,
              iconNode: (
                <Icon
                  src={item?.src || ''}
                  color={theme}
                  size={55}
                  className={styles['item-icon']}
                />
              ),
            })),
          }))}
        />
      </div>
    </SupportCardProvider>
  )
}

export default SupportCard
