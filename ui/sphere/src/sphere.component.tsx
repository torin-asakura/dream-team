import { Canvas }      from '@react-three/fiber'

import React           from 'react'
import { memo }        from 'react'

import { Model }       from './model'
import { SphereProps } from './sphere.interfaces'

export const Sphere = memo<SphereProps>(({ style }) => (
  <Canvas
    style={style}
    camera={{
      fov: 25,
      position: [0.0, 0.0, 8.0],
    }}
  >
    <ambientLight color='#a2a2fa' intensity={0.65} />
    <directionalLight color='#e01aff' position={[2, 2, 2]} intensity={0.6} />

    <ambientLight color='#007aff' intensity={0.1} />
    <directionalLight color='#007aff' position={[12, 0, 12]} intensity={0.5} />
    <Model />
  </Canvas>
))
