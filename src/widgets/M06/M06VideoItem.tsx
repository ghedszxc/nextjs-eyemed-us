'use client'

import { IItems } from './types'
import { useM06 } from './M06Context'
import ResponsivePicture from '@/components/Picture/ResponsivePicture'
import clsx from 'clsx'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'
import { dynamicTheme } from './utils'

const M06VideoItem = ({ data, globalTheme }: { data: IItems; globalTheme?: string }) => {
  const { setDialog, setSelectedVideoUrl } = useM06()

  const onClickHandler = () => {
    setDialog(true)
    setSelectedVideoUrl(data?.videoUrl || '')
  }

  return (
    <div className={clsx(styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme`], data.cls)}>
      <div className={clsx(styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__card`])}>
        <div>
          {(data?.picture || data?.fallbackImage) && (
            <div onClick={onClickHandler}>
              <ResponsivePicture
                crops={data.picture}
                url={data.fallbackImage}
                name="videoVariant"
                type="widgets"
                className={clsx(
                  styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__video_thumbnail`]
                )}
              />
            </div>
          )}

          {data.title && (
            <h2
              className={clsx(styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__title`])}
            >
              {data.title}
            </h2>
          )}
          {data.subtitle && (
            <div
              className={clsx(
                styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__subtitle`]
              )}
            >
              {AppConfig.html(data.subtitle)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default M06VideoItem
