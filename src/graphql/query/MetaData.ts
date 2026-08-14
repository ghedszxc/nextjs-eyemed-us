import { gql } from 'graphql-request'
import { FILEDOWNLOAD, PICTURE, TAG } from './Fragments'

export const MetaDataQuery = (variables: any) => {
  return {
    query: gql`
      query PageQuery($path: String!) {
        content {
          pageByPath(path: $path) {
            title
            htmlTitle
            htmlDescription
            hiddenInSitemap
            settings(paths: ["MetaImg", "noIndexNoFollow"])
            localizedVariants {
              ... on CMChannel {
                navigationPath {
                  id
                  segment
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
      ${PICTURE}
    `,
    variables,
  }
}
