// Modules
import { IM06, IItems } from './types'
import styles from './styles/index.module.scss'
import AppConfig from '@/lib/AppConfig'
import { ThemeColor } from '@/types/theme'
import clsx from 'clsx'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import ResponsivePicture from '@/components/Picture/ResponsivePicture'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'
import { M06Provider } from './M06Provider'
import { dynamicTheme } from './utils'
import CTAClientWrapper from '@/components/CTAClientWrapper'
import M06VideoItem from './M06VideoItem'
import M06VideoModal from './M06VideoModal'

const M06 = ({
  theme,
  title,
  subtitle,
  subtitleAlignment,
  footNote,
  cta,
  items,
  globalTheme,
}: IM06) => {
  const getComponents = (data: IItems, key: number) => {
    if (!data?.type) {
      return (
        <div
          key={key}
          className={clsx(styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme`], data.cls)}
        >
          <div
            className={clsx(styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__card`])}
            style={{ position: 'relative' }}
          >
            {data?.icon && (
              <>
                <AnimateSwipe>
                  <Icon
                    src={data.icon}
                    color={dynamicTheme(data.theme, globalTheme) as ThemeColor}
                    className={clsx(
                      styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__icon`]
                    )}
                  />
                </AnimateSwipe>
              </>
            )}

            {!data.titleTagHeader && data.title && (
              <>
                <AnimateSwipe>
                  <h2
                    className={clsx(
                      styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__title`]
                    )}
                  >
                    {data.title}
                  </h2>
                </AnimateSwipe>
              </>
            )}

            {data.titleTagHeader && data.title && (
              <h3
                className={clsx(
                  styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__titleTagHeader`]
                )}
              >
                {data.title}
              </h3>
            )}

            {data.subtitle && (
              <>
                <AnimateSwipe>
                  <div
                    className={clsx(
                      styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__subtitle`]
                    )}
                  >
                    {AppConfig.html(data.subtitle)}
                  </div>
                </AnimateSwipe>
              </>
            )}

            {data?.cta && (
              <div
                className={clsx(
                  styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__actions`]
                )}
              >
                <AnimateSwipe className={styles['mo6_item_btn']}>
                  <CTAClientWrapper
                    cta={data?.cta}
                    theme={dynamicTheme(data.theme, globalTheme) as ThemeColor}
                    variant="primary"
                    noUnderline
                    className={clsx(
                      styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__button`]
                    )}
                  />
                </AnimateSwipe>
              </div>
            )}
          </div>
        </div>
      )
    } else if (data?.type == 'isPicture') {
      return (
        <div
          key={key}
          className={clsx(
            styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme`],
            styles['noPadding'],
            data.cls
          )}
        >
          <div className={clsx(styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__card`])}>
            <div style={{ position: 'relative' }}>
              {(data?.picture || data?.fallbackImage) && (
                <ResponsivePicture
                  crops={data.picture}
                  url={data.fallbackImage}
                  name="M06"
                  type="widgets"
                  className={clsx(
                    styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__image`]
                  )}
                />
              )}

              <div
                className={clsx(
                  styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__image_card`]
                )}
              >
                <div
                  className={clsx(
                    styles[`mo6_${dynamicTheme(data.theme, globalTheme)}_theme__image_card_body`]
                  )}
                >
                  <AnimateSwipe>
                    {data.title && (
                      <h2
                        className={clsx(
                          styles[
                            `mo6_${dynamicTheme(data.theme, globalTheme)}_theme__image_card_title`
                          ]
                        )}
                      >
                        {data.title}%
                      </h2>
                    )}

                    {data.subtitle && <div>{AppConfig.html(data.subtitle)}</div>}
                  </AnimateSwipe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (data?.type == 'isVideo') {
      return <M06VideoItem key={key} data={data} globalTheme={globalTheme} />
    }

    return null
  }
  return (
    <M06Provider>
      {/* <AnimateSwipe> */}
      <div className={styles['mo6']}>
        <div className={styles['mo6_container']}>
          <div className={clsx(styles[`mo6_card_${dynamicTheme(theme, globalTheme)}`])}>
            {title && (
              <>
                <AnimateSwipe>
                  <h2>{title}</h2>
                </AnimateSwipe>
              </>
            )}

            {subtitle && (
              <>
                <AnimateSwipe>
                  <div className={clsx(styles[subtitleAlignment])}>{AppConfig.html(subtitle)}</div>
                </AnimateSwipe>
              </>
            )}
          </div>

          <div className={clsx(styles['mo6_container_items'])}>
            {items?.map((data, key) => getComponents(data, key))}
          </div>

          <div className={clsx(styles[`mo6_footer_${dynamicTheme(theme, globalTheme)}`])}>
            {footNote && (
              <AnimateSwipe>
                <p>{AppConfig.html(footNote)}</p>
              </AnimateSwipe>
            )}

            <div className={clsx(styles[`mo6_footer_${dynamicTheme(theme, globalTheme)}__button`])}>
              {cta && cta.label && (
                <AnimateSwipe>
                  <Button
                    href={cta?.url}
                    isExternal={cta?.isExternal}
                    theme={dynamicTheme(theme, globalTheme) as ThemeColor}
                    variant="primary"
                    noUnderline
                    style={{ width: '100%' }}
                  >
                    {cta?.label}
                  </Button>
                </AnimateSwipe>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </AnimateSwipe> */}

      <M06VideoModal />
    </M06Provider>
  )
}
export default M06
