import clsx from 'clsx'
import style from './styles/index.module.scss'
import { TM08 } from './types'
import Typography from '@/components/UI/Typography'
import ResponsiveImage from '@/components/ResponsiveImage'
import FeatureListing from './components/FeatureListing'
import AppConfig from '@/logic/configs/AppConfig'
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Icon from '@/components/UI/Icon'
import Anchor from '@/components/shared/Anchor'
import CTAClientWrapper from '@/components/CTAClientWrapper'

const M08 = ({ theme = 'leaf', title, subtitle, banners, bannerImage, cta }: TM08) => {
  const themeName = theme || 'leaf'
  return (
    <AnimateSwipe>
      <div className={clsx(style.mo8, style[themeName])}>
        {bannerImage?.image && (
          <div className={style.mobile}>
            <div className={style.landscape}>
              {cta ? (
                <Anchor href={cta.url} isExternal={cta?.isExternal}>
                  <ResponsiveImage mobile={bannerImage?.image?.mobile} />
                </Anchor>
              ) : (
                <ResponsiveImage mobile={bannerImage?.image?.mobile} />
              )}
            </div>
          </div>
        )}
        <div className={style.container}>
          {title && (
            <Typography
              className={style.title}
              as="h2"
              fontSize="6xl"
              font="book"
              fontWeight={300}
              color={themeName}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography className={style.subtitle} as="div" fontSize="md" muted>
              {AppConfig.html(subtitle)}
            </Typography>
          )}
          <div className={style.listings}>
            <div className={style.left}>
              <div className={style.row}>
                {banners?.map(banner => (
                  <div className={clsx(style.wrapper, banner.cls)} key={banner?.title}>
                    <FeatureListing {...{ ...banner, theme: banner?.theme || themeName }} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={clsx(style.right, {
                [style.imageWrap]: !!bannerImage?.image,
                [style.contentWrap]: !bannerImage?.image,
              })}
            >
              {bannerImage?.image ? (
                <div className={style.square}>
                  {cta ? (
                    <Anchor href={cta.url}>
                      <ResponsiveImage desktop={bannerImage?.image?.desktop} />
                    </Anchor>
                  ) : (
                    <ResponsiveImage desktop={bannerImage?.image?.desktop} />
                  )}
                </div>
              ) : (
                <>
                  {bannerImage?.icon && <Icon src={bannerImage?.icon} color={themeName} />}
                  {bannerImage?.title && (
                    <Typography
                      as="h2"
                      font="book"
                      fontSize="6xl"
                      fontWeight={300}
                      color={themeName}
                    >
                      {bannerImage.title}
                    </Typography>
                  )}
                  {bannerImage?.subtitle && (
                    <Typography as="div">{AppConfig.html(bannerImage.subtitle)}</Typography>
                  )}
                  {bannerImage?.cta && (
                    <CTAClientWrapper
                      className={style.cta}
                      theme={themeName}
                      cta={bannerImage?.cta}
                    />
                  )}
                </>
              )}
            </div>
          </div>
          {cta && (
            <div className={style.buttonWrap}>
              <CTAClientWrapper className={style.cta} theme={themeName} cta={cta} />
            </div>
          )}
        </div>
      </div>
    </AnimateSwipe>
  )
}

export default M08
