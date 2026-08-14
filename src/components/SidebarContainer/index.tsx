import styles from './styles/index.module.scss'

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles['blog-sidebar']} role="complementary">
      {children}
    </div>
  )
}

export default SidebarContainer
