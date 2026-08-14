import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IModal } from './types'
import styles from './styles/index.module.scss'
import Typography from '@/components/UI/Typography'
import Icon from '@/components/UI/Icon'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  theme = 'leaf',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true
}: IModal) => {
  // Handle escape key press
  useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, closeOnEscape])

  if (!isOpen) return null

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  const modalContent = (
    <div className={styles['modal-overlay']} onClick={handleOverlayClick}>
      <div className={`${styles.modal} ${styles[`size-${size}`]}`}>
        {title && (
          <div className={`${styles['modal-header']} ${styles[`theme-${theme}`]}`}>
            <Typography
              as="h3"
              font="heavy"
              fontSize="4xl"
              color={theme}
              className={styles['modal-title']}
            >
              {title}
            </Typography>
            {showCloseButton && (
              <button
                type="button"
                className={`${styles['modal-close']}`}
                onClick={onClose}
                aria-label="Close modal"
              >
                <Icon type="close" color={theme} size={24} />
              </button>
            )}
          </div>
        )}
        <div className={styles['modal-content']}>
          {children}
        </div>
      </div>
    </div>
  )

  // Use portal to render modal at document body level
  return createPortal(modalContent, document.body)
}

export default Modal