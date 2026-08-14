import React from 'react'
import { BlogSearch } from './types'
import { cmsRepo } from '@/graphql/CMSRepo'
import { locales } from '@/middleware'
import { getAdapterBlogUrl, getAkamayUrl, getBlogPagination } from '@/lib/utilities'
import Container from './components/Container'
import BlogSearchList from './components/BlogSearchList'
import Pagination from '@/components/Pagination'

const SearchResult: React.FC<BlogSearch> = async ({
  theme = 'leaf',
  lang = 'en-us',
  searchParams,
  resultMsg,
}) => {
  const parseResult = (gqResult: any) => {
    return gqResult?.map(result => ({
      title: result?.title,
      caption: result?.subjectTaxonomy[1]?.externalReference,
      description: result?.teaserText?.text,
      url: getAdapterBlogUrl(result),
      image: getAkamayUrl(
        result?.pictures[0]?.uriTemplate
          ?.replace('{cropName}', 'landscape_ratio10x5')
          .replace('{width}', '1236')
      ),
      alt: result?.pictures[0]?.title,
    }))
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
  const { limit, offset } = getBlogPagination(searchParams?.pageNum ?? 1, false)
  const cmsSearchBlog = await cmsRepo.getArticles(
    currentLocale?.id,
    `+_blog ${searchParams?.blog_search || ''}`,
    offset,
    limit
  )

  const blogResults = parseResult(cmsSearchBlog?.content?.search?.result)

  const pageNum = Math.max(1, searchParams?.pageNum ?? 1)
  const { totalPages } = getBlogPagination(pageNum, false, cmsSearchBlog?.content?.search?.numFound)

  return (
    <Container>
      <BlogSearchList blogs={blogResults} theme={theme} />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          theme={theme}
          currentPage={searchParams?.pageNum ?? 1}
          params={{ blog_search: searchParams?.blog_search ?? '' }}
        />
      )}
      {!blogResults?.length && (
        <p style={{ fontSize: '1.28571rem', textAlign: 'center', marginBottom: '2rem' }}>
          {resultMsg}
        </p>
      )}
    </Container>
  )
}

export default SearchResult
