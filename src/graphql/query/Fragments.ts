import { gql } from 'graphql-request'

const TeaserTitle1 = gql`
  fragment TeaserTitle1 on CMTeaserImpl {
    id
    type
    name
    title
    teaserTitle
    teaserText {
      text
    }
    pictures {
      id
      name
      title
      data {
        uri
        contentType
      }
    }
    teaserTargets {
      callToActionText
      callToActionEnabled
      target {
        id
        name
        type
        title
        segment
        navigationPath {
          name
          segment
        }
        ...TeaserLevel2
      }
    }
  }
`

const TeaserLevel2 = gql`
  fragment TeaserLevel2 on CMTeaserImpl {
    id
    type
    name
    title
    teaserTitle
    teaserText {
      text
    }
    pictures {
      id
      name
      title
      data {
        uri
        contentType
      }
    }
    teaserTargets {
      callToActionText
      callToActionEnabled
      target {
        id
        name
        type
        title
      }
    }
  }
`

export const FILEDOWNLOAD = gql`
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
`

const IMAGE = gql`
  fragment image on CMImageMap {
    teaserTitle
    teaserText {
      text
    }
    teaserTargets {
      target {
        id
        name
      }
    }
    pictures {
      ...Picture
    }
  }
`

export const TAG = gql`
  fragment Tag on CMTaxonomyImpl {
    id
    name
    externalReference
    value
    parent {
      id
      name
      value
    }
  }
`

export const HTML = gql`
  fragment html on CMHTMLImpl {
    teaserTitle
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
    htmlTitle
    html
  }
`

export const PICTURE = gql`
  fragment Picture on CMPictureImpl {
    id
    title
    type
    viewtype
    uriTemplate
    detailText {
      text
    }
    alt
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
    subjectTaxonomy {
      ...Tag
    }
  }
`

export const SVG = gql`
  fragment SVG on CMSVGImpl {
    id
    title
    type
    viewtype
    uriTemplate
    detailText {
      text
    }
    inlineCode
  }
`

export const VIDEO = gql`
  fragment Video on CMVideoImpl {
    id
    title
    detailText {
      text
    }
    type
    dataUrl
    data {
      contentType
      uri
    }
    picture {
      ...Picture
    }
    autoplay
    loop
    mute
    hideControl
    playOnHover
    hideVolumeControl
  }
`

export const PLACEHOLDER = gql`
  fragment Placeholder on CMPlaceholderImpl {
    segment
    viewtype
    name
    type
    title
    detailText {
      text
    }
    settings(paths: ["Topics", "List", "consent"])
    pictures {
      ...Picture
    }
  }
`

export const PERSON = gql`
  fragment CMPerson on CMPerson {
    displayName
    jobTitle
    teaserText {
      text
    }
    pictures {
      ...Picture
    }
  }
`

export const ARTICLE = gql`
  fragment Article on CMArticleImpl {
    teaserTitle
    title
    teaserOverlaySettings {
      style
    }
    detailText {
      text
    }
    teaserText {
      text
    }

    extDisplayedDate
    validTo
    teaserTargets {
      callToActionText
    }
    settings(paths: ["bgcolor"])
    articleColorSettings: settings(paths: ["title", "otherproperties", "teaserOverlay"])
    pictures {
      ...Picture
    }
    videos {
      data {
        uri
      }
      dataUrl
    }
    subjectTaxonomy {
      ...Tag
    }
    related {
      id
      name
      type
      viewtype
      ...FileDownload
      ...TeaserTitle1
      video {
        ...Video
      }
      teaserTargets {
        target {
          ...FileDownload
          ... on CMExternalLink {
            url
            teaserTitle
          }
        }
        callToActionText
        callToActionHash
      }
    }
  }
`

export const PAGEMIN = gql`
  fragment Pagemin on CMChannelImpl {
    id
    title
    name
    type
    segment
    teaserTitle
    navigationPath {
      segment
    }
    teaserTargets {
      target {
        title
        navigationPath {
          name
          segment
        }
      }
    }
  }
`

export const EXTLINK = gql`
  fragment ExtLink on CMExternalLinkImpl {
    id
    name
    type
    url
    openInNewTab
    teaserTitle
    teaserText {
      text
    }
    teaserOverlaySettings {
      style
    }
    pictures {
      ...Picture
    }
  }
`

const LXTEASER = gql`
  fragment LXTeaser on LXTeaserImpl {
    id
    name
    type
    title
    viewtype
    subjectTaxonomy {
      ...Tag
    }
    segment
    teaserTitle
    teaserText {
      text
    }
    teaserTitle1
    teaserTitle2
    teaserLabelText
    teaserLabelStyle
    teaserLabelPosition
    teaserLabelVisible
    teaserText1
    teaserText2
    teaserOverlay1Settings
    teaserLXCallToActionSettings {
      style
      callToActionText
      target {
        id
        segment
        navigationPath {
          id
          segment
        }
      }
    }
    video {
      ...Video
    }
    teaserOverlayVideo {
      id
      name
      data {
        uri
      }
      related {
        id
        name
        title
        video {
          ...Video
        }
      }
    }
    pictures {
      ...Picture
    }
    picture {
      ...Picture
    }
    teaserTargets {
      target {
        id
        ...ExtLink
        ...Article
        ...Pagemin
      }
      callToActionText
      callToActionHash
      callToActionEnabled
    }
    teaserOverlaySettings {
      style
      enabled
      positionX
      positionY
      width
    }
    settings(paths: ["otherproperties"])
    validFrom
  }
`

export const TEASER = gql`
  fragment Teaser on CMTeaserImpl {
    id
    type
    name
    title
    teaserTitle
    teaserText {
      text
    }
    viewtype
    settings(
      paths: [
        "otherproperties"
        "collectionTextOverlay"
        "teaserOverlay"
        "collectionTextOverlayStyle"
      ]
    )
    subjectTaxonomy {
      ...Tag
    }
    pictures {
      type
      ...Picture
      detailText {
        text
      }
      teaserText {
        text
      }
      viewtype
      data {
        uri
      }
    }
    video {
      ...Video
    }
    videos {
      teaserTitle
      teaserText {
        text
      }
      data {
        uri
      }
      dataUrl
      related {
        videos {
          title
          data {
            uri
          }
          dataUrl
        }
      }
    }
    teaserOverlaySettings {
      enabled
      style
    }
    teaserTargets {
      callToActionEnabled
      callToActionText
      callToActionHash
      target {
        ...Article
        id
        name
        type
        title
        ...Picture
        navigationPath {
          name
          segment
        }
        ...Pagemin
        ...ExtLink
        ...FileDownload
        ...Video
      }
    }
    media {
      ... on CMPictureImpl {
        uriTemplate
        alt
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
        }
      }
      ... on CMVideoImpl {
        id
        title
        detailText {
          text
        }
        type
        dataUrl
        data {
          contentType
          uri
        }
        picture {
          ...Picture
        }
        autoplay
        loop
        mute
        hideControl
        playOnHover
        hideVolumeControl
        teaserTitle
        teaserText {
          text
        }
      }
      ... on CMSVGImpl {
        ...SVG
      }
    }
  }
`

export const INNERCOLLECTIONLVL4 = gql`
  fragment innerCollectionLevel4 on CMCollectionImpl {
    viewtype
    id
    name
    title
    collectionTitle
    collectionSubTitle
    subjectTaxonomy {
      ...Tag
    }
    items {
      ...Teaser
      ...Pagemin
      ...ExtLink
      ...LXTeaser
    }
  }
`

export const INNERCOLLECTIONLVL3 = gql`
  fragment innerCollectionLevel3 on CMCollectionImpl {
    viewtype
    id
    name
    title
    collectionTitle
    collectionSubTitle
    subjectTaxonomy {
      ...Tag
    }
    items {
      ...Teaser
      ...Pagemin
      ...ExtLink
      ...innerCollectionLevel4
    }
  }
`

export const INNERCOLLECTIONLVL2 = gql`
  fragment innerCollectionLevel2 on CMCollectionImpl {
    viewtype
    id
    name
    title
    collectionTitle
    collectionSubTitle
    subjectTaxonomy {
      ...Tag
    }
    items {
      ...Teaser
      ...Pagemin
      ...ExtLink
      ...innerCollectionLevel3
    }
  }
`

export const INNERCOLLECTION = gql`
  fragment innerCollection on CMCollectionImpl {
    viewtype
    id
    name
    title
    collectionTitle
    collectionSubTitle
    collectionText
    subjectTaxonomy {
      ...Tag
    }
    picture {
      data {
        uri
      }
    }
    videos {
      data {
        uri
      }
      dataUrl
    }
    teaserLXCallToActionSettings {
      style
      callToActionEnabled
      callToActionText
      target {
        id
        segment
        navigationPath {
          id
          segment
        }
        ...Teaser
      }
    }
    items {
      ...Teaser
      ...Pagemin
      ...ExtLink
      ...innerCollectionLevel2
      ...FileDownload
      ...LXTeaser
    }
  }
`

export const COLLECTION = gql`
  fragment Collection on CMCollectionImpl {
    id
    name
    title
    viewtype
    collectionTitle
    collectionSubTitle
    collectionText
    collectionTextOverlayStyle
    pictures {
      data {
        uri
      }
    }
    videos {
      data {
        uri
      }
      dataUrl
    }
    subjectTaxonomy {
      ...Tag
    }
    teaserTargets {
      callToActionEnabled
      callToActionText
      callToActionHash
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
    media {
      type
      ...Picture
      ...Video
    }
    teaserLXCallToActionSettings {
      style
      callToActionEnabled
      callToActionText
      target {
        id
        type
        name
        segment
        navigationPath {
          id
          segment
        }
        ...Teaser
        ...ExtLink
      }
    }
    settings(paths: ["otherproperties"])
    items {
      ...Teaser
      ...Pagemin
      ...ExtLink
      ...innerCollection
      ...Placeholder
      ...CMPerson
      ...Article
      ...FileDownload
      ...Tag
      ...Picture
      ...LXTeaser
    }
  }
`

const DYNAMIC_CONTENT = gql`
  fragment DynamicContent on LXDynamicContent {
    dynamicRules {
      target {
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
`

export const PAGE = gql`
  fragment PAGE on CMChannelImpl {
    id
    title
    htmlDescription
    segment
    navigationPath {
      title
      segment
    }
    subjectTaxonomy {
      ...Tag
    }
    name
    htmlTitle
    teaserOverlaySettings {
      style
    }
    grid {
      rows {
        placements {
          name
          viewtype
          placementAnimation
          backgroundColor
          marginVertical
          items {
            id
            name
            type
            title
            viewtype
            ...Picture
            ...Collection
            ...Tag
            ...Placeholder
            ...Teaser
            ...Pagemin
            ...Article
            ...html
            ...image
            ...FileDownload
            ...ExtLink
            ...DynamicContent
            ...LXTeaser
          }
        }
      }
    }
  }
  ${TeaserTitle1}
  ${TeaserLevel2}
  ${FILEDOWNLOAD}
  ${PICTURE}
  ${SVG}
  ${VIDEO}
  ${COLLECTION}
  ${TAG}
  ${PLACEHOLDER}
  ${TEASER}
  ${PAGEMIN}
  ${ARTICLE}
  ${HTML}
  ${EXTLINK}
  ${INNERCOLLECTION}
  ${INNERCOLLECTIONLVL2}
  ${INNERCOLLECTIONLVL3}
  ${INNERCOLLECTIONLVL4}
  ${PERSON}
  ${IMAGE}
  ${DYNAMIC_CONTENT}
  ${LXTEASER}
`
