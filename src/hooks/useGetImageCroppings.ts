// Modules
import IMAGE_CROPPINGS from '@/logic/configs/constants/IMAGE_CROPPINGS'
import { getAkamayUrl } from '@/logic/utilities'
import { ICrops } from '../models/ICrops'

export interface IUseGetImageCroppings {
  crops: ICrops
  uriTemplate: string
  type: 'components' | 'widgets'
  name: string
  url?: string
  isCropped?: boolean
}

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'md' | 'xl' | 'initial'

type TReturn = { [key in Breakpoint]: string }

const useGetImageCroppings = ({
  crops,
  uriTemplate,
  type,
  name,
  url,
  isCropped,
}: IUseGetImageCroppings): TReturn => {
  // Functions
  const getUriTemplate = (breakpoint: Breakpoint): string => {
    const cropName = IMAGE_CROPPINGS?.[type]?.[name]?.[breakpoint]?.toString() || ''

    if (cropName === 'default' || isCropped) return getAkamayUrl(url || '') || ''

    const width = crops?.[cropName]

    if (width === undefined) return ''

    const template: string =
      uriTemplate?.replace('{cropName}', cropName)?.replace('{width}', width.toString()) || ''

    return getAkamayUrl(template)
  }

  if (!type || !name) return { initial: '', lg: '', md: '', sm: '', xl: '', xs: '' }

  return {
    initial: getUriTemplate('initial') || getAkamayUrl(url || '') || '',
    xs: getUriTemplate('xs') || getAkamayUrl(url || '') || '',
    sm: getUriTemplate('sm') || getAkamayUrl(url || '') || '',
    md: getUriTemplate('md') || getAkamayUrl(url || '') || '',
    lg: getUriTemplate('lg') || getAkamayUrl(url || '') || '',
    xl: getUriTemplate('xl') || getAkamayUrl(url || '') || '',
  }
}

export default useGetImageCroppings
