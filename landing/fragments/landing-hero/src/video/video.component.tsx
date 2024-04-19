import React                  from 'react'
import { FC }                 from 'react'

import { Video as VideoBase } from '@ui/video'

import { VideoProps }         from './video.interfaces'

export const Video: FC<VideoProps> = ({ callback }) => (
  <VideoBase
    autoPlay
    muted
    loop
    playsInline
    onPlay={callback()}
    poster='./sphere.png'
    src={'https://cdn.dream-team.tech/sfera.webm'}
    mime={'video/webm' as any}
    top={[250, 250, 320]}
    width={[375, 375, 631]}
  />
)
