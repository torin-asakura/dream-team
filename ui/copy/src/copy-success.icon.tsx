import styled               from '@emotion/styled'

import React                from 'react'
import { FC }               from 'react'

import { CopySuccessProps } from './copy-success.interface'

const Path = styled.path({
  strokeDasharray: 1,
  animationName: 'draw',
  animationDuration: '1s',
})

const Circle = styled.circle({
  strokeDasharray: 1,
  animationName: 'draw',
  animationDuration: '1s',
})

const CopySuccessIcon: FC<CopySuccessProps> = ({ color }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle
      pathLength={1}
      strokeLinecap='round'
      cx='12'
      cy='12'
      r='8'
      stroke={color}
      stroke-width='1.25'
      fill-opacity='0'
      stroke-linejoin='round'
    />
    <Path
      pathLength={1}
      strokeLinecap='round'
      d='M8.40039 12.1602L10.8004 14.5602L15.6004 9.76019'
      stroke={color}
      stroke-width='1.25'
      stroke-linejoin='round'
    />
  </svg>
)

export { CopySuccessIcon }
