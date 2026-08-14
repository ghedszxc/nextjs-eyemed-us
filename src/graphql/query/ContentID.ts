import { gql } from 'graphql-request'
import { TAG } from './Fragments'

export const ContentByIdQuery = (variables: { id: string }) => {
  return {
    query: gql`
      query ContentQuery($id: String!) {
        content {
          page(id: $id) {
            grid {
              rows {
                placements {
                  name
                  viewtype
                  items {
                    ...dynamicContent
                  }
                }
              }
            }
          }
          content(id: $id) {
            id
            name
            type
            ...Teaser
            ...CTA
            ...Tag
            ...Article
            ...ExtLinkMin
          }
        }
      }
      fragment Article on CMArticle {
        viewtype
        teaserTitle
        extDisplayedDate
        articleColorSettings: settings(paths: ["title", "otherproperties", "teaserOverlay"])
        detailText {
          text
        }
        teaserText {
          text
        }
        authors {
          ...CMPerson
        }
        subjectTaxonomy {
          ...Tag
        }
        navigationPath {
          name
          segment
        }
        teaserTargets {
          target {
            navigationPath {
              name
              segment
            }
          }
        }
        pictures {
          ...Picture
        }
        related {
          ...Collection
          type
          ... on CMTeaser {
            ...Teaser
          }
          ...CollectionDouble
          ... on CMArticle {
            teaserTitle
            detailText {
              text
            }
            media {
              ...Picture
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
        teaserLXCallToActionSettings {
          callToActionEnabled
          callToActionText
          style
          target {
            type
            ...Teaser
          }
        }
        teasableItems {
          type
          name
          ...html
          ... on CMTeaser {
            ...Teaser
          }
          ...CollectionDouble
          ... on CMArticle {
            id
            viewtype
            teaserTitle
            detailText {
              text
            }
            media {
              ...Picture
            }
            teaserTargets {
              callToActionEnabled
              callToActionText
              target {
                id
                name
                type
                title
                navigationPath {
                  name
                  segment
                }
              }
            }
          }
        }
      }

      fragment html on CMHTMLImpl {
        viewtype
        teaserTitle
        html
        htmlTitle
        teaserText {
          text
        }
        detailTextAsTree
        detailTextReferencedContent {
          name
        }
        localizedVariants {
          name
        }
      }

      fragment CollectionDouble on CMCollection {
        id
        viewtype
        collectionTitle
        collectionSubTitle
        collectionMaxElementNumber
        collectionText
        collectionProductStyle
        teaserLXCallToActionSettings {
          callToActionEnabled
          callToActionText
          style
        }
        media {
          type
          ...Picture
        }
        teasableItems {
          type
          ...FileDownload
        }
        items {
          ...Teaser
        }
      }

      fragment SVG on CMSVGImpl {
        ...Picture
        inlineCode
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

      fragment CTA on CMChannel {
        id
        title
        name
        type
        authors {
          id
          name
        }
        related {
          id
          name
          creationDate
        }
        segment
        navigationPath {
          segment
        }
      }
      fragment Teaser on CMTeaserImpl {
        id
        type
        name
        viewtype
        title
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
            contentType
          }
        }
        teaserOverlaySettings {
          enabled
          style
        }
        teaserTargets {
          callToActionEnabled
          callToActionText
          target {
            id
            name
            type
            title
            navigationPath {
              name
              segment
            }
            ...ExtLinkMin
            ...FileDownload
          }
        }
      }
      fragment ExtLinkMin on CMExternalLinkImpl {
        url
      }
      fragment dynamicContent on LXDynamicContent {
        id
        creationDate
        dynamicRules {
          target {
            id
            name
            teaserText {
              text
            }
            navigationPath {
              name
              segment
            }
          }
        }
      }

      ${TAG}
    `,
    variables,
  }
}
