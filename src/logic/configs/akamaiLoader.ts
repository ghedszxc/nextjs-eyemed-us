import { ImageLoaderProps } from 'next/image'

const akamaiURL = process.env.AKAMAY_PATH

const akamaiLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const formattedSrc = src?.split('/')?.slice(3)?.join('/')

  if (process.env.NODE_ENV === 'development') {
    return `${akamaiURL || ''}${formattedSrc}?w=${width}&q=${quality || 100}`
  } else {
    return `${akamaiURL || ''}${formattedSrc}?w=${width}&q=${quality || 100}`
  }
}

export default akamaiLoader
