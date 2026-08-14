import { createContext, useContext } from 'react'

interface M06ContextType {
  dialog: boolean
  setDialog: (open: boolean) => void
  selectedVideoUrl: string
  setSelectedVideoUrl: (url: string) => void
}

const M06Context = createContext<M06ContextType | undefined>(undefined)

export const useM06 = () => {
  const context = useContext(M06Context)
  if (!context) throw new Error('useM06 must be used within M06Provider')
  return context
}

export { M06Context }
