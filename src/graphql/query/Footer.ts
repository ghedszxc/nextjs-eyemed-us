import { gql } from 'graphql-request'

export const FooterQuery = (variables: any) => {
  return {
    query: gql`
      query PageQuery($path: String!, $names: [String]) {
        content {
          pageByPath(path: $path) {
            ...FooterPlacement
          }
        }
      }

      fragment Logos on CMTeaserImpl {
        id
        name
        pictures {
          data {
            uri
          }
        }
        teaserTargets {
          target {
            ... on CMExternalLink {
              url
            }
          }
        }
      }

      fragment Disclaimer on CMArticleImpl {
        detailText {
          text
        }
        title
      }

      fragment MainLinks on CMChannelImpl {
        teaserTitle
        teaserTarget {
          navigationPath {
            segment
          }
        }
      }

      fragment MainExternalLinks on CMExternalLinkImpl {
        teaserTitle
        url
      }

      fragment FooterPlacement on CMChannelImpl {
        grid {
          placements(names: $names) {
            viewtype
            name
            items {
              type
              ...Logos
              ...Disclaimer
              ...MainLinks
              ...MainExternalLinks
            }
          }
        }
      }
    `,
    variables,
  }
}
