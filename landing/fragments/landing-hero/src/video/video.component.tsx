import React                  from 'react'
import { FC }                 from 'react'

import { Video as VideoBase } from '@ui/video'

import { VideoProps }         from './video.interfaces'

export const Video: FC<VideoProps> = () => (
  <VideoBase
    autoPlay
    muted
    loop
    playsInline
    src={require('./assets/2ee21dfa-sphere-with-bg.webm')}
    mime={'video/webm' as any}
    top={[250, 250, 320]}
    width={[375, 375, 631]}
  />
)
