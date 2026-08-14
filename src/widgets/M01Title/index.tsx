import React from 'react'
import { TM01Title } from './types'
import Banner from '@/components/Banner'

const M01Title: React.FC<TM01Title> = props => {
  const topTitle = props?.bannerTitle
  const topText = props?.bannerText
  // console.log('props', props)
  return (
    <Banner
      topTitle={topTitle}
      topText={topText}
      showHero={false}
      showTopBanner={true}
      isCard={false}
      theme={props?.theme}
      globalTheme={props?.globalTheme}
    />
  )
}

export default M01Title
