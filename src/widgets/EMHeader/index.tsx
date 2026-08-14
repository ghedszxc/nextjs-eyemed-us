import { IHeader } from './types'
import style from './styles/index.module.scss'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'
import Breadcrumb from './components/Breadcrumb'

const EMHeader: React.FC<IHeader> = props => (
  <>
    <header className={style.header}>
      <a href="#main-content" className={style.hiddenLink}>
        skip to page content
      </a>
      {props?.crumbs && props.crumbs.length > 1 && (
        <a href="#sub-nav-breadcrumb" className={style.hiddenLink}>
          skip to sub navigation links
        </a>
      )}
      <Desktop {...props} />
      <Mobile {...props} />
    </header>
    <Breadcrumb crumbs={props?.crumbs} />
    <div id="main-content" style={{ height: 0, width: 0, opacity: 0 }}></div>
  </>
)

export default EMHeader
