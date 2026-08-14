import clsx from 'clsx'
import style from './styles/index.module.scss'
import { IComparisonChart } from './types'
import AppConfig from '@/logic/configs/AppConfig'
import DesktopComparisonTable from './components/DesktopComparisonTable'
import MobileComparisonTable from './components/MobileComparisonTable'

const EMComparisonChart = ({ title, subtitle, columns }: IComparisonChart) => {
  return (
    <div className={style.comparisonChart}>
      <div className={style.container}>
        {title && <h2 className={style.title}>{title}</h2>}
        {subtitle && <div className={style.body}>{AppConfig.html(subtitle)}</div>}
      </div>
      <div className={clsx(style.container, style.tableContainer)}>
        <MobileComparisonTable columns={columns} />
        <DesktopComparisonTable columns={columns} />
      </div>
    </div>
  )
}

export default EMComparisonChart
