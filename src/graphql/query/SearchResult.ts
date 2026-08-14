import { gql } from 'graphql-request'
import { FILEDOWNLOAD, PICTURE, TAG } from './Fragments'

export const SearchPageContent = (variables: {
  siteId: string
  search: string
  limit?: number
  offset?: number
}) => {
  return {
    query: gql`
      query SearchContent($siteId: String!, $search: String!, $limit: Int, $offset: Int) {
        content {
          search(
            siteId: $siteId
            query: $search
            docTypes: ["CMChannel", "CMDownload"]
            includeSubTypes: false
            sortFields: EXTERNALLY_DISPLAYED_DATE_DESC
            limit: $limit
            offset: $offset
          ) {
            numFound
            result {
              ...FileDownload
              ... on CMChannel {
                id
                title
                creationDate
                extDisplayedDate
                htmlDescription
                segment
                navigationPath {
                  title
                  segment
                }
                subjectTaxonomy {
                  ...Tag
                }
                media {
                  ... on CMPicture {
                    data {
                      uri
                    }
                    alt
                  }
                }
                name
                htmlTitle
                teaserOverlaySettings {
                  style
                }
                grid {
                  placements(
                    excludeNames: [
                      "Sub Top Navigation"
                      "Meta_links"
                      "main_placement_2"
                      "main_placement_3"
                      "main_placement_4"
                      "main_placement_5"
                      "main_placement_6"
                      "main_placement_7"
                      "main_placement_8"
                      "main_placement_9"
                      "main_placement_10"
                      "main_placement_11"
                      "main_placement_12"
                      "main_placement_12"
                      "main_placement_13"
                      "main_placement_14"
                      "main_placement_15"
                    ]
                  ) {
                    name
                    viewtype
                    items {
                      ... on CMTeaser {
                        media {
                          ...Picture
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      ${TAG}
      ${FILEDOWNLOAD}
      ${PICTURE}
    `,
    variables,
  }
}
