import { gql } from 'graphql-request'

export const NavigationQuery = (variables: any) => {
  return {
    query: gql`
      query PageQuery($path: String!) {
        content {
          pageByPath(path: $path) {
            ...NavigationPlacement
          }
        }
      }

      fragment SingleLink on CMChannelImpl {
        teaserTitle
        teaserTarget {
          navigationPath {
            segment
          }
        }
      }

      fragment MultipleLink on CMCollection {
        collectionTitle
        items {
          ...SingleLink
        }
      }

      fragment ButtonCTA on CMTeaser {
        teaserTitle
        teaserTarget {
          navigationPath {
            segment
          }
        }
      }

      fragment NavigationPlacement on CMChannelImpl {
        grid {
          rows {
            placements {
              viewtype
              items {
                type
                name
                ...SingleLink
                ...MultipleLink
                ...ButtonCTA
                ...ExternalLink
              }
            }
          }
        }
      }

      fragment ExternalLink on CMExternalLinkImpl {
        teaserTitle
        url
      }
    `,
    variables,
  }
}
