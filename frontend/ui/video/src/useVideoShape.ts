import { useEffect } from 'react'
import { useState }  from 'react'

interface Shape {
  width: number
  height: number
}

const useVideoShape = (videoRef): Shape => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const updateShape = () => {
      const { width: realWidth, height: realHeight } = videoRef.current.getBoundingClientRect()
      setWidth(realWidth)
      setHeight(realHeight)
    }

    updateShape()

    window.addEventListener('resize', updateShape)

    return () => window.removeEventListener('resize', updateShape)
  }, [videoRef])

  return { width, height }
}

export { useVideoShape }
