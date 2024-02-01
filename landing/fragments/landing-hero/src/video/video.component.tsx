import React                  from 'react'
import { FC }                 from 'react'

import { Video as VideoBase } from '@ui/video'

import { VideoProps }         from './video.interfaces'

export const Video: FC<VideoProps> = ({ src, mimeType }) => (
  <VideoBase
    autoPlay
    muted
    loop
    playsInline
    src={src as any}
    mime={mimeType as any}
    top={[300, 300, '50%']}
    width={[375, 375, 631]}
  />
)
