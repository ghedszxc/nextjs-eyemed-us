import clsx from 'clsx'
import style from './styles/index.module.scss'
import { IResource } from './types'
import { truncateText } from '@/lib/utilities'
import Icon, { IconType } from '../UI/Icon'
import Anchor from '../shared/Anchor'
import ClientAnchor from './components/ClientAnchor'

const Resource = ({ className, cls, icon, cta, hasDownload, textLimit, theme }: IResource) => {
  // const url = getResourceUrl(cta?.url || '')
  // const urlDownload = getResourceUrl(cta?.url || '', true)
  const url = cta?.url || ''
  const urlDownload = cta?.url || ''
  const isAkamay = url.includes('/caas/v1/media/')
  const DownloadLink = isAkamay ? ClientAnchor : Anchor

  const isRegularLink = () => {
    if (!url) return false
    const lower = url.toLowerCase()
    if (lower.startsWith('mailto:') || lower.startsWith('tel:')) {
      return false
    }
    return true
  }

  if (!url || !cta?.label) return null

  const tooltip = textLimit && cta.label.length > textLimit ? cta.label : undefined

  const iconProps = {
    ...(icon ? { src: icon } : { type: 'fileText' as IconType }),
    color: theme,
  }

  return (
    <div className={clsx(style.resource, style[theme || 'leaf'], cls, className)} title={tooltip}>
      {hasDownload ? (
        <p className={style['file-type']}>
          <Icon {...iconProps} />
          <span>{truncateText(cta.label, textLimit)}</span>
        </p>
      ) : (
        <DownloadLink
          className={style['file-type']}
          href={urlDownload}
          aria-label={isRegularLink() ? `download ${cta.label}` : undefined}
          download
          isExternal={cta.isExternal}
        >
          <Icon {...iconProps} />
          <span>{truncateText(cta.label, textLimit)}</span>
        </DownloadLink>
      )}
      {/* External CTA */}
      {cta && (!!cta.isExternal || hasDownload) && (
        <Anchor
          className={clsx(style['btn-svg'], { [style['no-btn']]: !isRegularLink() })}
          href={url}
          aria-label={`open ${cta.label} in new tab`}
          title={`open ${cta.label} in new tab`}
          isExternal
        >
          <Icon className="btn" type="newTab" />
        </Anchor>
      )}
      {/* Download CTA */}
      {hasDownload && (
        <DownloadLink
          className={clsx(style['btn-svg'], { [style['no-btn']]: !isRegularLink })}
          href={urlDownload}
          aria-label={`download ${cta.label}`}
          title={`download ${cta.label}`}
          download
        >
          <Icon className="btn" type="download" />
        </DownloadLink>
      )}
    </div>
  )
}

export default Resource
