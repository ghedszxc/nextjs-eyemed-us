import { gql } from 'graphql-request'

export const BlogPathsQuery = (variables: {
  siteId: string
  search: string
  limit?: number
  offset?: number
}) => {
  return {
    query: gql`
      query BlogPathsQuery($siteId: String!, $search: String!, $offset: Int, $limit: Int) {
        content {
          search(
            siteId: $siteId
            query: $search
            docTypes: "CMArticle"
            includeSubTypes: false
            offset: $offset
            limit: $limit
          ) {
            numFound
            result {
              ... on CMArticle {
                id
                segment
                modificationDate
                subjectTaxonomy {
                  value
                }
              }
            }
          }
        }
      }
    `,
    variables,
  }
}
