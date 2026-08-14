import React from 'react'
import { TM01CopyBlock } from './types'
import Banner from '@/components/Banner'

const M01CopyBlock: React.FC<TM01CopyBlock> = props => {
  return <Banner {...props} isCard={false} />
}

export default M01CopyBlock
