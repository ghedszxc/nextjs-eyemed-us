import styles from './styles/index.module.scss'
import clsx from 'clsx'
import { TBlogCardsProps } from './types'
import { getBlogPagination } from '@/lib/utilities'
import Card from './components/card'
import Pagination from '@/components/Pagination'

const BlogCards: React.FC<TBlogCardsProps> = ({
  theme = 'leaf',
  cards = [],
  articleCount = 0,
  currentPage,
  hasSidebar = false,
}) => {
  const pageNum = Math.max(1, currentPage ?? 1)
  const { totalPages } = getBlogPagination(pageNum, hasSidebar, articleCount)

  return (
    <div
      className={clsx(styles['block-cards'], styles[theme], { [styles.hasSidebar]: hasSidebar })}
    >
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          {/* <Card /> */}
          {cards?.map((card, index) => <Card key={index} theme={theme} {...card} />)}
        </div>
        {/* Pagination */}
        {cards && <Pagination totalPages={totalPages} currentPage={currentPage} theme={theme} />}
      </div>
    </div>
  )
}

export default BlogCards
