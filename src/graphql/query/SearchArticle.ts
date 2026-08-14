import { gql } from 'graphql-request'

export const SearchArticleQuery = (variables: {
  siteId: string
  search: string
  limit?: number
  offset?: number
}) => {
  return {
    query: gql`
      query SearchArticleQuery($siteId: String!, $search: String!, $offset: Int, $limit: Int) {
        content {
          search(
            siteId: $siteId
            query: $search
            docTypes: "CMArticle"
            includeSubTypes: false
            offset: $offset
            limit: $limit
            sortFields: EXTERNALLY_DISPLAYED_DATE_DESC
          ) {
            numFound
            result {
              ... on CMArticle {
                id
                segment
                extDisplayedDate
                modificationDate
                creationDate
                viewtype
                title
                authors {
                  ...CMPerson
                }
                extDisplayedDate
                teaserText {
                  text
                }
                detailText {
                  text
                }
                pictures {
                  id
                  title
                  type
                  viewtype
                  uriTemplate
                  crops {
                    aspectRatio {
                      height
                      width
                    }
                    name
                    sizes {
                      height
                      width
                    }
                    minWidth
                  }
                  data {
                    uri
                    size
                    contentType
                  }
                }
                teaserTargets {
                  callToActionText
                  target {
                    title
                    navigationPath {
                      segment
                    }
                    ... on CMChannel {
                      id
                      title
                      navigationPath {
                        segment
                      }
                    }
                    ... on CMExternalLink {
                      ...ExternalLink
                    }
                  }
                }
                subjectTaxonomy {
                  name
                  value
                  externalReference
                }
                articleColorSettings: settings(paths: ["title", "otherproperties", "teaserOverlay"])

                related {
                  ...FileDownload
                  ... on CMExternalLink {
                    teaserTitle
                    url
                  }
                  ...Teaser
                  ...CMPerson
                  ...Collection
                }
              }
            }
          }
        }
      }

      fragment Collection on CMCollection {
        id
        name
        viewtype
        collectionTitle
        collectionSubTitle
        collectionMaxElementNumber
        collectionText
        collectionSettings: settings(
          paths: [
            "collectionText"
            "collectionSubTitle"
            "otherproperties"
            "collectionTextOverlay"
            "collectionTextOverlayStyle"
          ]
        )
        collectionProductStyle
        teaserIconSvg {
          ...SVG
        }
        teasableItems {
          type
          ... on CMTeaser {
            ...Teaser
          }
        }
      }

      fragment CMPerson on CMPerson {
        eMail
        firstName
        lastName
        jobTitle
        picture {
          title
          alt
          fullyQualifiedUrl
        }
      }

      fragment Teaser on CMTeaserImpl {
        id
        viewtype
        type
        name
        teaserTitle
        teaserText {
          text
        }
        teaserOverlaySettings {
          enabled
          style
        }
        media {
          picture {
            title
            alt
            fullyQualifiedUrl
          }
        }

        settings(paths: ["otherproperties", "teaserOverlay"])

        teaserTargets {
          callToActionEnabled
          callToActionText
          callToActionHash
          target {
            navigationPath {
              name
              segment
            }
          }
        }
      }

      fragment FileDownload on CMDownload {
        type
        filename
        title
        teaserText {
          text
        }
        detailText {
          text
        }
        id
        data {
          contentType
          uri
          size
        }
        validFrom
      }

      fragment Picture on CMPicture {
        id
        title
        type
        viewtype
        uriTemplate
        crops {
          aspectRatio {
            height
            width
          }
          name
          minWidth
          sizes {
            height
            width
          }
        }
        data {
          uri
          size
          contentType
        }
      }

      fragment ExternalLink on CMExternalLink {
        id
        name
        type
        url
        teaserTitle
        teaserText {
          text
        }
        pictures {
          id
          name
          title
          uriTemplate
          crops {
            minWidth
            minHeight
          }
          data {
            uri
            contentType
          }
        }
      }

      fragment SVG on CMSVGImpl {
        ...Picture
        inlineCode
      }
    `,
    variables,
  }
}
