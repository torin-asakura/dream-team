import { Canvas }            from '@react-three/fiber'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { memo }              from 'react'

import { SphereProps }       from '../sphere.interfaces'

export const CanvasInner = memo<PropsWithChildren<SphereProps>>(({ style, children }) => (
  <Canvas style={style} camera={{ position: [10, 0, 0], fov: 30 }}>
    <ambientLight color='#ffffff' intensity={0.1} />
    <directionalLight color='#ffffff' position={[10, 4, -2]} intensity={2.5} />
    <directionalLight color='#10EFFF' position={[1, 6.5, -9]} intensity={2.5} />
    <directionalLight color='#e261ff' position={[0, -2, 3]} intensity={2.5} />
    <directionalLight color='#ffffff' position={[0, -10, 0]} intensity={0.4} />
    {children}
  </Canvas>
))
