import clsx from 'clsx'
import style from './styles/index.module.scss'
import { TM13 } from './types'
import AppConfig from '@/logic/configs/AppConfig'
import Typography from '@/components/UI/Typography'
import AnimateSwipe from '@/components/shared/AnimateSwipe'

const M13 = ({ theme = 'leaf', title, subtitle, features, subtitle2 }: TM13) => {
  const themeName = theme || 'leaf'
  return (
    <AnimateSwipe>
      <div className={clsx(style.m13, style[themeName])}>
        <div className={clsx(style.container, style['featured-list'])}>
          {title && <h2 className={style.title}>{title}</h2>}
          {subtitle && (
            <>
              <div className={style.body}>{AppConfig.html(subtitle)}</div>
              <br />
            </>
          )}
          <div className={style.listings}>
            {features?.map((feature, i) => (
              <div className={clsx(style.row, feature?.cls)} key={`m13-feature-${i}`}>
                {feature?.title && (
                  <Typography as={feature?.titleType || 'h3'}>{feature.title}</Typography>
                )}
                {AppConfig.html(feature?.subtitle || '')}
              </div>
            ))}
          </div>
          {subtitle2 && <div className={style.body}>{AppConfig.html(subtitle2)}</div>}
        </div>
      </div>
    </AnimateSwipe>
  )
}

export default M13
