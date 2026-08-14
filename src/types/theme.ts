export type ThemeColor = 'leaf' | 'grape' | 'lips' | 'sun' | 'moon' | 'white' | 'gray'

export type TWidgetImages = {
  desktop?: {
    url?: string
    alt?: string
  }
  mobile?: {
    url?: string
    alt?: string
  }
}

export type TWidgetAlignment = 'left' | 'right'

/**
 * Teaser Overlay Settings
 * reference: https://documentation.coremedia.com/cmcc-10/current/webhelp/studio-user-en/content/configureToTStyle.html
 */
export interface ThemeSettings {
  style?: {
    /**
     * Contains the value of a CSS color property to be used as the color of the overlay.
     */
    color?: string

    /**
     * Contains the value of a CSS color property to be used as the background color of the overlay.
     */
    backgroundColor?: string

    /**
     * 	Contains plain CSS styles to be attached to the style property of the overlay.
     */
    additionalStyles?: string

    /**
     * Contains one or more CSS class names to be attached to the overlay.
     */
    cls?: string

    /**
     * Contains one or more CSS class names to be attached to the text element of the overlay containing the contents of the Teaser Text field.
     */
    textCls?: string

    /**
     * Contains one or more CSS class names to be attached to the call-to-action button element.
     */
    ctaCls?: string
  }
  enabled?: boolean
  positionX?: number
  positionY?: number
  width?: number
}
