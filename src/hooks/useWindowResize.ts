import { useEffect, useState } from 'react'

type TWindowDimension = {
  height: number
  width: number
}

const useWindowResize = () => {
  const window = globalThis?.window
  const [windowDimension, setWindowDimension] = useState<TWindowDimension>({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    const onWindowResize = () => {
      setWindowDimension({
        height: window?.innerHeight,
        width: window?.innerWidth,
      })
    }
    if (typeof window !== 'undefined') {
      setWindowDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onWindowResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onWindowResize)
      }
    }
  }, [window])

  return {
    height: windowDimension?.height,
    width: windowDimension?.width,
  }
}

export default useWindowResize
