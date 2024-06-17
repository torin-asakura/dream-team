import React                      from 'react'
import { FastAverageColorResult } from 'fast-average-color'
import { FastAverageColor }       from 'fast-average-color'
import { useEffect }              from 'react'
import { useState }               from 'react'

import { CDN_VIDEO_PATH }         from '../landing-hero.constants'
import { CDN_VIDEO_MINE }         from '../landing-hero.constants'
import { Video }                  from '../video'

const fac = new FastAverageColor()

export const Sphere = ({ setBackgroundColor }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    if (!videoIsPlaying) return

    const videoElement = document.querySelector('video')

    const getColor = () => {
      try {
        let color: FastAverageColorResult | undefined

        // eslint-disable-next-line prefer-const
        color = fac.getColor(videoElement, { algorithm: 'dominant' })
        if (color.value.every((value) => value === 0)) return

        setBackgroundColor(color?.rgb)
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') throw error
      }
    }

    getColor()
  }, [videoIsPlaying, setBackgroundColor])

  return (
    <Video mimeType={CDN_VIDEO_MINE} src={CDN_VIDEO_PATH} onPlay={() => setVideoIsPlaying(true)} />
  )
}
