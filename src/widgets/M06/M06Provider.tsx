'use client'

import { useState } from 'react'
import { M06Context } from './M06Context'

export const M06Provider = ({ children }: { children: React.ReactNode }) => {
  const [dialog, setDialog] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('')

  return (
    <M06Context.Provider value={{ dialog, setDialog, selectedVideoUrl, setSelectedVideoUrl }}>
      {children}
    </M06Context.Provider>
  )
}
