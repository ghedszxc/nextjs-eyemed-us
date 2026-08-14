export type IIconTypes =
  | 'download'
  | 'share'
  | 'spinner'
  | 'play'
  | 'close'
  | 'external'
  | 'arrowRight'
  | 'arrowLeft'
  | 'arrowRightCTA'
  | 'arrowLeftCTA'
  | 'arrowLeftCircle'
  | 'arrowRightCircle'
  | 'arrowRightCard'
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'mail'

export interface IIcon {
  type: IIconTypes
  className?: string
}
