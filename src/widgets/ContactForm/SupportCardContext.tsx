import { createContext, useContext } from 'react'

interface SupportCardContextType {
  isExpanded: boolean
  setIsExpanded: (expanded: boolean) => void
}

const SupportCardContext = createContext<SupportCardContextType | undefined>(undefined)

export const useSupportCard = () => {
  const context = useContext(SupportCardContext)
  if (!context) throw new Error('useSupportCard must be used within SupportCardProvider')
  return context
}

export { SupportCardContext }
