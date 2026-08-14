import React from 'react'
import { TM01Card } from './types'
import Banner from '@/components/Banner'

const M01Card: React.FC<TM01Card> = props => {
  return <Banner {...props} isCard={true} />
}

export default M01Card
