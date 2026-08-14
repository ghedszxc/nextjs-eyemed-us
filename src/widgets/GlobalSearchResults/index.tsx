import { cmsRepo } from '@/graphql/CMSRepo'
import { getAkamayUrl, getBlogPagination } from '@/lib/utilities'
import { locales } from '@/middleware'
import React from 'react'
import GlobalSearchResultContainer from './components/Container'
import SearchResultItem from './components/SearchResultItem'
import Pagination from '@/components/Pagination'

const GlobalSearchResults = async ({ searchParams, lang = 'en-us', globalTheme }) => {
  const dynamicTheme = globalTheme || 'leaf'
  const currenPage = searchParams?.pageNum || 1
  // if (!searchParams?.universal_search) {
  //   notFound()
  // }

  const parseSearchData = (results: any) => {
    return results?.map((result: any, key: number) => {
      if (result?.type === 'CMDownload') {
        return (
          <SearchResultItem
            key={key}
            text={result?.title}
            exerp={result?.teaserText?.text}
            url={getAkamayUrl(result?.data?.uri)}
            isExternal={true}
            theme={dynamicTheme}
          />
        )
      }

      const BANNER_TYPE = ['m01-card', 'm01-copyblock']
      const searchResultLink = result?.navigationPath?.map(link => link?.segment)?.join('/')
      let image = ''
      let imageAlt = ''
      if (
        BANNER_TYPE?.includes(result?.grid?.placements[0]?.viewtype) &&
        result?.grid?.placements[0]?.items[0]?.media?.length
      ) {
        image = getAkamayUrl(result?.grid?.placements[0]?.items[0]?.media[0]?.data?.uri || '')
        imageAlt = result?.grid?.placements[0]?.items[0]?.media[0]?.alt || ''
      }

      return (
        <SearchResultItem
          key={key}
          url={`/${searchResultLink}`}
          text={result?.title}
          exerp={result?.htmlDescription}
          image={
            image !== ''
              ? {
                  url: image,
                  alt: imageAlt,
                }
              : undefined
          }
        />
      )
    })
  }

  const cmsPathIds = await cmsRepo.getPathsId()

  const pathList = cmsPathIds?.content?.sites
    ?.map(site => {
      return {
        id: site?.id || '',
        name: site?.name || '',
        locale: site?.locale?.toLowerCase()?.replace('_', '-') || '',
        modificationDate: site?.modificationDate || '',
        hiddenInSitemap: site?.hiddenInSitemap || false,
      }
    })
    .filter(
      (path: any) =>
        path?.name?.includes('Eyemed') && locales.includes(path.locale) && !path?.hiddenInSitemap
    )

  const currentLocale = pathList.find((path: any) => path?.locale?.includes(lang))
  const { limit, offset } = getBlogPagination(Math.max(1, searchParams?.pageNum ?? 1), false)
  const cmsSiteSearch = await cmsRepo.getSiteContents(
    currentLocale?.id,
    `${searchParams?.universal_search || ''}`,
    offset,
    limit
  )
  const searchResults = parseSearchData(cmsSiteSearch?.content?.search?.result)
  const { totalPages } = getBlogPagination(
    Math.max(1, searchParams?.pageNum ?? 1),
    false,
    cmsSiteSearch?.content?.search?.numFound
  )

  if (cmsSiteSearch?.content?.search?.numFound === 0 || !searchParams?.universal_search) {
    return (
      <GlobalSearchResultContainer>
        {searchParams?.universal_search && (
          <p
            style={{ fontSize: '1.28571rem', textAlign: 'center' }}
          >{`Sorry, your search did not generate any results.`}</p>
        )}
      </GlobalSearchResultContainer>
    )
  }

  return (
    <GlobalSearchResultContainer>
      {(cmsSiteSearch?.content?.search?.numFound > 0 || !searchParams?.universal_search) && (
        <div>
          <h3
            style={{ textTransform: 'none', fontFamily: 'unset', color: 'var(--color-leaf-text)' }}
          >
            {cmsSiteSearch?.content?.search?.numFound || 0} Search Results:
          </h3>
        </div>
      )}
      {searchResults}
      <Pagination
        totalPages={totalPages}
        currentPage={currenPage}
        theme={dynamicTheme}
        params={{ universal_search: searchParams?.universal_search ?? '' }}
      />
    </GlobalSearchResultContainer>
  )
}

export default GlobalSearchResults
