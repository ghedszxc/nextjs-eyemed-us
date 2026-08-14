export interface IShareModal {
  header?: string

  shareLabel?: string
  copyLabel?: string
  buttonLabel?: string

  url?: string

  closeHandler?: () => void
}
