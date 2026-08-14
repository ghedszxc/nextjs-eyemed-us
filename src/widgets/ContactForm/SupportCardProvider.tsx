'use client'

import { useState } from 'react'
import { SupportCardContext } from './SupportCardContext'

export const SupportCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <SupportCardContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SupportCardContext.Provider>
  )
}
