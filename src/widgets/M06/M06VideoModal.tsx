'use client'

import { useM06 } from './M06Context'
import VideoModal from './videoModal'

const M06VideoModal = () => {
  const { dialog, selectedVideoUrl, setDialog, setSelectedVideoUrl } = useM06()

  const onClose = () => {
    setDialog(false)
    setSelectedVideoUrl('')
  }

  return (
    <VideoModal dialog={dialog} videoUrl={selectedVideoUrl} onClose={onClose} isActive={dialog} />
  )
}

export default M06VideoModal
