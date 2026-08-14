import clsx from 'clsx'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import Anchor from '@/components/shared/Anchor'

interface IPagination {
  totalPages: number
  currentPage?: number
  visiblePages?: number
  theme?: ThemeColor
  params?: Record<string, string>
}

const Pagination = ({
  totalPages = 0,
  currentPage = 1,
  visiblePages = 5,
  theme = 'leaf',
  params,
}: IPagination) => {
  if (totalPages <= 1) return null

  const page = parseInt(`${currentPage}`)

  let start = Math.max(1, page)
  let end = start + visiblePages - 1

  if (end > totalPages) {
    end = totalPages
    start = Math.max(1, end - visiblePages + 1)
  }

  const prevPage = page > 1 ? page - 1 : null
  const nextPage = page < totalPages ? page + 1 : null
  const showPrevNext = totalPages > visiblePages

  const urlParams = params
    ? Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&') + '&'
    : ''

  return (
    <div className={clsx(styles['navigation'], styles[theme])}>
      {/* Screen reader status announcement */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Page {page} of {totalPages}
      </div>

      <nav>
        {showPrevNext && (
          <Anchor
            className={`${styles['left-arrow']} ${prevPage ? '' : styles['disabled']}`}
            href={prevPage ? `?${urlParams}pageNum=${prevPage}` : '#'}
            aria-disabled={!prevPage}
            aria-label="Go to previous page"
          >
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="caret-left"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              className="svg-inline--fa fa-caret-left fa-w-6"
            >
              <path
                fill="currentColor"
                d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
              />
            </svg>
          </Anchor>
        )}

        {Array.from({ length: totalPages }, (_, i) => {
          const pageNum = i + 1
          const isVisible = pageNum >= start && pageNum <= end

          return (
            <div
              key={pageNum}
              className={styles['dot']}
              style={{ display: isVisible ? undefined : 'none' }}
            >
              <Anchor
                className={`${styles['paginationItem']} ${
                  pageNum === page ? styles['active'] : ''
                }`}
                href={pageNum === 1 ? `?${urlParams}` : `?${urlParams}pageNum=${pageNum}`}
                aria-label={`Go to page ${pageNum}`}
              >
                {pageNum}
              </Anchor>
            </div>
          )
        })}

        {showPrevNext && (
          <Anchor
            className={`${styles['right-arrow']} ${nextPage ? '' : styles['disabled']}`}
            href={nextPage ? `?${urlParams}pageNum=${nextPage}` : '#'}
            aria-disabled={!nextPage}
            aria-label="Go to next page"
          >
            <svg
              className="svg-inline--fa fa-caret-right fa-w-6"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="caret-right"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                fill="currentColor"
                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
              />
            </svg>
          </Anchor>
        )}
      </nav>
    </div>
  )
}

export default Pagination
