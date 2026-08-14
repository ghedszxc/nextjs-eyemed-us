// Modules
import useGetImageCroppings from '@/hooks/useGetImageCroppings'
import { getAkamayUrl } from '@/logic/utilities'
import { IPictureCrops } from '@/models/ICrops'

// Components

export interface IPictureProps {
  crops?: IPictureCrops
  alt?: string
  name: string
  type: 'components' | 'widgets'
  url?: string
  className?: string
  isCropped?: boolean
}

const ResponsivePicture: React.FC<IPictureProps> = ({
  crops,
  alt,
  name,
  type,
  url,
  className,
  isCropped,
}) => {
  // Hooks
  // Variables
  const common = {
    alt: alt || name,
    style: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    } as React.CSSProperties,
  }

  const src = useGetImageCroppings({
    crops: crops?.crops || {},
    uriTemplate: crops?.uriTemplate || '',
    name,
    type,
    url,
    isCropped,
  })

  return (
    <picture className={className}>
      <source srcSet={src.xl || getAkamayUrl(url || '')} media="(min-width: 1440px)" />
      <source srcSet={src.lg || getAkamayUrl(url || '')} media="(min-width: 1280px)" />
      <source srcSet={src.md || getAkamayUrl(url || '')} media="(min-width: 1024px)" />
      <source srcSet={src.sm || getAkamayUrl(url || '')} media="(min-width: 864px)" />
      <source srcSet={src.xs || getAkamayUrl(url || '')} media="(min-width: 480px)" />
      <img {...common} src={src.initial} alt={src.initial} />
    </picture>
  )
}
export default ResponsivePicture
