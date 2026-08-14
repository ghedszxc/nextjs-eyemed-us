import { ThemeColor } from '@/types/theme'
import { GenericWidgetNameModel, GenericWidgetValueModel } from './IGenericWidgetValue.interface'
import { ISettings } from './ISettings.interface'
import { IUrl } from './IUrl.interface'

export interface IWidgetModel {
  widgetName: GenericWidgetNameModel
  widgetValue: GenericWidgetValueModel
  widgetContainerId?: number
  widgetAnimation?: string
  widgetPagePath?: string
  widgetBackgroundColor?: string
  initialWidget?: boolean
  setContenHeight?: (widgetName: string) => any
  show?: boolean
  url?: IUrl
  settings?: ISettings
  pageType?: string
  searchParams?: Record<string, string | string[] | undefined>
  lang?: string
  globalTheme?: ThemeColor | ''
  route?: string[]
  index?: number
}

export class WidgetModel implements IWidgetModel {
  widgetName: GenericWidgetNameModel
  widgetValue: GenericWidgetValueModel
  widgetContainerId: number
  widgetAnimation?: string
  widgetPagePath?: string

  constructor(
    widgetName: GenericWidgetNameModel,
    widgetValue: GenericWidgetValueModel,
    widgetContainerId: number,
    widgetAnimation?: string,
    widgetPagePath?: string
  ) {
    this.widgetContainerId = widgetContainerId
    this.widgetName = widgetName
    this.widgetValue = widgetValue
    this.widgetAnimation = widgetAnimation
    this.widgetPagePath = widgetPagePath
  }
}
