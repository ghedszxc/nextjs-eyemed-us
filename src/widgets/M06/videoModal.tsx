'use client'

// Modules
import { IDialog } from './types'
import ReactPlayer from 'react-player'
import React, { useEffect } from 'react'
import styles from './styles/index.module.scss'

// Components
import Icon from '@/components/UI/Icon'

interface VideoModalProps extends IDialog {
  onClose: () => void
  isActive: boolean
  videoUrl?: string
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose, isActive }) => {
  // Hooks
  // Functions
  // Effects
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'hidden auto'
    }
  }, [isActive])

  return (
    <div className={styles['mo6_video_card']} style={{ display: isActive ? 'block' : 'none' }}>
      <div className={styles['mo6_video_card__body']}>
        <div className={styles['mo6_video_card__player']}>
          <div style={{ width: '100%', height: '100%' }}>
            <div style={{ textAlign: 'right', margin: '0.3rem' }}>
              <span onClick={onClose}>
                <Icon
                  type="close"
                  color="white"
                  size={25}
                  className={styles['mo6_video_card__icon']}
                />
              </span>
            </div>
            {videoUrl && <iframe src={videoUrl} width="100%" height="100%"></iframe>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
