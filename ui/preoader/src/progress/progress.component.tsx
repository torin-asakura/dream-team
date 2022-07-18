import React    from 'react'
import { FC }   from 'react'

import { Line } from './line.component'
import { Path } from './path.component'

interface Props {
  progress: number
}

export const Progress: FC<Props> = ({ progress }) => (
  <Path
    key='progress'
    initial={{ width: 0 }}
    animate={{ width: 240 }}
    exit={{ width: 0 }}
    transition={{ duration: 1 }}
  >
    <Line progress={progress} />
  </Path>
)
