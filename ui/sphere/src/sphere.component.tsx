import { Canvas }      from '@react-three/fiber'

import React           from 'react'
import { memo }        from 'react'

import { Loader }      from './loader'
import { Model }       from './model'
import { SphereProps } from './sphere.interfaces'

export const Sphere = memo<SphereProps>(({ style }) => (
  <Canvas style={style} camera={{ position: [10, 0, 0], fov: 30 }}>
    <ambientLight color='#ffffff' intensity={0.3} />
    <directionalLight color='#ffffff' position={[10, 3, 3]} intensity={2.5} />
    <Loader>
      <Model />
    </Loader>
  </Canvas>
))
