// Modules
import { IM16MediaLeftAndRight } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import AppConfig from '@/lib/AppConfig'
import clsx from 'clsx'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Typography from '@/components/UI/Typography'

const M16MediaLeftAndRight = ({
  title,
  body,
  media,
  theme,
  globalTheme,
}: IM16MediaLeftAndRight) => {
  const dynamicTheme = theme || globalTheme || 'leaf'

  // Inject media into body content if it exists
  const getBodyWithMedia = () => {
    if (!body) return ''

    let bodyContent = body

    // If we have media, inject it at the beginning of the body content
    if (media) {
      let mediaHtml = ''

      if (media.type === 'image') {
        mediaHtml = `<img src="${media.url}" alt="${media.alt || ''}" class="${styles['m16_media_image']}" />`
      } else if (media.type === 'video') {
        mediaHtml = `<video class="${styles['m16_media_video']}" controls preload="metadata"><source src="${media.url}" type="video/mp4" />Your browser does not support the video tag.</video>`
      }

      // Wrap media in a div with the floating class
      const wrappedMedia = `<div class="${styles['m16_media_media']}">${mediaHtml}</div>`

      // Prepend the media to the body content
      bodyContent = wrappedMedia + bodyContent
    }

    return bodyContent
  }

  return (
    <div className={styles['m16_media_container']}>
      <AnimateSwipe>
        <div className={clsx(styles['m16_media'], styles[`theme-${dynamicTheme}`])}>
          {title && (
            <Typography
              as="h3"
              color={dynamicTheme as ThemeColor}
              className={styles['m16_media_title']}
            >
              {title}
            </Typography>
          )}

          {(body || media) && (
            <div className={styles['m16_media_body']}>{AppConfig.html(getBodyWithMedia())}</div>
          )}
        </div>
      </AnimateSwipe>
    </div>
  )
}

export default M16MediaLeftAndRight
