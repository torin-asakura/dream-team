import React                  from 'react'
import { FC }                 from 'react'

import { Video as VideoBase } from '@ui/video'

import { VideoProps }         from './video.interface'

const Video: FC<VideoProps> = ({ src, mimeType }) => (
  <VideoBase
    autoPlay
    muted
    loop
    playsInline
    src={src as any}
    mime={mimeType as any}
    top={[200, 200, '50%']}
    left='1%'
    position='relative'
    width={[375, 375, 'auto']}
  />
)

export { Video }
