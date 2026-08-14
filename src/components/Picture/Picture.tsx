// Modules
import akamaiLoader from '@/logic/configs/akamaiLoader'
import Image, { ImageProps } from 'next/image'

export interface IPictureProps extends ImageProps {
  src: string
}

const Picture: React.FC<IPictureProps> = ({ src, alt, width = 0, height = 0, ...props }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Image
      {...props}
      width={width}
      height={height}
      src={src}
      alt={alt || src}
      loader={akamaiLoader}
    />
  )
}
export default Picture
