import React from 'react'
import styles from './styles/index.module.scss'
import { TBanner } from './types'
import clsx from 'clsx'
import Topbar from './component/TopBar'
import ImageBanner from './component/ImageBanner'
import { ThemeColor } from '@/types/theme'

const Banner: React.FC<TBanner> = ({
  theme,
  images,
  bannerText,
  bannerTitle,
  showTopBanner = false,
  topTitle = '',
  topText = '',
  isShort = true,
  showHero = true,
  isCard = false,
  ctas = [],
  links = [],
  globalTheme,
}) => {
  const bannerDynamicStyles = {
    '--bannerHeight': isShort ? '26.5625vw' : '35.156vw',
  } as React.CSSProperties

  const dynamicTheme = !!theme ? theme : globalTheme ?? 'leaf'

  return (
    <div className={clsx(styles['m01'])}>
      {showTopBanner && (
        <Topbar
          theme={dynamicTheme as ThemeColor}
          isStandAlone={!showHero}
          title={topTitle}
          text={topText}
        />
      )}
      {showHero && (
        <ImageBanner
          images={images}
          theme={dynamicTheme as ThemeColor}
          title={bannerTitle}
          text={bannerText}
          isCard={isCard}
          customStyle={bannerDynamicStyles}
          ctas={ctas}
          links={links}
        />
      )}
    </div>
  )
}

export default Banner
