import style from '../../styles/index.module.scss'
import { IFeatureListing } from '@/models/IFeatureListing'
import AppConfig from '@/logic/configs/AppConfig'
import Icon from '@/components/UI/Icon'
import Typography from '@/components/UI/Typography'

const FeatureListing = ({ theme, icon, titleType, title, subtitle }: IFeatureListing) => {
  return (
    <div className={style.featureListing}>
      {icon && <Icon src={icon} color={theme} />}
      <div className={style.content}>
        {title && (
          <Typography as={titleType || 'h4'} font="heavy" fontSize="lg" color={theme} uppercase>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography as="div" fontSize="md" muted>
            {AppConfig.html(subtitle)}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default FeatureListing
