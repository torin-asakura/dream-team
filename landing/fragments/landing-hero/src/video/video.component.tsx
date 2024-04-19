import React                  from 'react'
import { FC }                 from 'react'

import { Video as VideoBase } from '@ui/video'

import { VideoProps }         from './video.interfaces'

export const Video: FC<VideoProps> = ({ src, mimeType, onPlay }) => (
  <VideoBase
    autoPlay
    muted
    loop
    playsInline
    crossOrigin='anonymous'
    onPlay={() => onPlay?.()}
    poster='./sphere.png'
    src={src as any}
    mime={mimeType as any}
    top={[250, 250, 320]}
    width={[375, 375, 631]}
  />
)
