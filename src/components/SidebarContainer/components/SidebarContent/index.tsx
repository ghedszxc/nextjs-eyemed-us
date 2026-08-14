import styles from '../../styles/index.module.scss'

const SidebarContent = ({ children }: { children?: React.ReactNode }) => {
  return <div className={styles['blog-sidebar__content']}>{children}</div>
}

export default SidebarContent
