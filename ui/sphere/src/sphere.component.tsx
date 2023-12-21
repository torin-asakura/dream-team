import { Canvas }      from '@react-three/fiber'

import React           from 'react'
import { memo }        from 'react'

import { Loader }      from './loader'
import { Model }       from './model'
import { SphereProps } from './sphere.interfaces'

export const Sphere = memo<SphereProps>(({ style }) => (
  <Canvas
    style={style}
    camera={{
      fov: 50,
      position: [0.0, 0.0, 8.0],
    }}
  >
    <ambientLight color='#fffff' intensity={0.3} />
    <directionalLight color='#ffffff' position={[2, 2, 3]} intensity={2.5} />
    <Loader>
      <Model />
    </Loader>
  </Canvas>
))
