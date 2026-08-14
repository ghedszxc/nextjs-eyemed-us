'use client'

import styles from './styles/index.module.scss'
import { useSupportCard } from './SupportCardContext'
import { ISupportCard } from './types'

const SupportCardMobileToggle = ({ sections }: ISupportCard) => {
  const { isExpanded, setIsExpanded } = useSupportCard()

  return (
    <div className={styles['mobile-toggle']}>
      <div className={`${styles['mobile-content']} ${isExpanded ? styles.expanded : ''}`}>
        {sections &&
          sections?.map((section, sectionIndex) => (
            <ul key={sectionIndex} className={styles['list-unstyled']}>
              <li>
                <h3 className={styles['list-title']}>{section.heading}</h3>
              </li>
              <ul className={styles['list-unstyled']}>
                {section &&
                  section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item?.iconNode}
                      <span>{item.text}</span>
                    </li>
                  ))}
              </ul>
            </ul>
          ))}
      </div>

      <button onClick={() => setIsExpanded(!isExpanded)} className={styles['toggle-button']}>
        <span className={styles['toggle-icon']}>{isExpanded ? '-' : '+'}</span>
        <span>{isExpanded ? 'CLOSE' : 'MORE INFO'}</span>
      </button>
    </div>
  )
}

export default SupportCardMobileToggle
