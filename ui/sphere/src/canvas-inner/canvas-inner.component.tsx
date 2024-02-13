import { Canvas }            from '@react-three/fiber'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { memo }              from 'react'

import { SphereProps }       from '../sphere.interfaces'

export const CanvasInner = memo<PropsWithChildren<SphereProps>>(({ style, children }) => (
  <Canvas style={style} camera={{ position: [10, 0, 0], fov: 35 }}>
    <directionalLight color='#ffffff' position={[3, 4, 0]} intensity={1.2} />
    <directionalLight color='#ffffff' position={[3, -1, 0]} intensity={0.5} />
    <directionalLight color='#00DDFF' position={[-4, 6.5, -9]} intensity={3.0} />
    <directionalLight color='#CA2BE2' position={[-1, 3, 10]} intensity={7} />
    <directionalLight color='#F100E7' position={[-4, -20, 0]} intensity={2.0} />
    {children}
  </Canvas>
))
