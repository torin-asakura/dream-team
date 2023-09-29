import { Canvas }      from '@react-three/fiber'

import React           from 'react'
import { memo }        from 'react'

import { Model }       from './model'
import { SphereProps } from './sphere.interfaces'

export const Sphere = memo<SphereProps>(({ style }) => (
  <Canvas
    style={style}
    camera={{
      fov: 20,
      position: [0.0, 0.0, 8.0],
    }}
  >
    <Model />
  </Canvas>
))
