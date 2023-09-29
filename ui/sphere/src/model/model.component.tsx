import { useFrame } from '@react-three/fiber'

import React        from 'react'
import { FC }       from 'react'
import { Mesh }     from 'three'
import { useRef }   from 'react'

import fragment     from './shaders/fragment.glsl'
import vertex       from './shaders/vertex.glsl'

export const Model: FC = () => {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    const { clock } = state

    if (mesh.current) {
      const shaderMaterial = mesh.current.material as any

      shaderMaterial.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 30]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
          uSpeed: { value: 0.3 },
          uNoiseDensity: { value: 1.7 },
          uNoiseStrength: { value: 0.15 },
          uFrequency: { value: 2 },
          uAmplitude: { value: 5.0 },
          uIntensity: { value: 1 },
        }}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  )
}
