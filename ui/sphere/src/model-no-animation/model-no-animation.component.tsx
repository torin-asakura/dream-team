import { useGLTF }                      from '@react-three/drei'

import React                            from 'react'
import { FC }                           from 'react'
import { Group }                        from 'three'
import { useRef }                       from 'react'

import { CDN_SPHERE_NO_ANIMATION_PATH } from '../sphere.constants'
import { GLTFResult }                   from './model-no-animation.interfaces'
import { ModelProps }                   from './model-no-animation.interfaces'

export const ModelNoAnimation: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF(CDN_SPHERE_NO_ANIMATION_PATH, true) as unknown as GLTFResult

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Sphere'
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.001']}
          rotation={[1.079, -0.013, 0.085]}
        />
        <mesh
          name='Sphere001'
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.002']}
          scale={0.964}
        />
        <group
          name='Area'
          position={[5.793, 6.449, 8.961]}
          rotation={[0, -0.996, -0.999]}
          scale={[-11.858, 11.858, 11.858]}
        />
        <group
          name='Area001'
          position={[3.488, 6.267, -6.024]}
          rotation={[-3.096, -0.988, -2.081]}
          scale={[-11.858, 11.858, 11.858]}
        />
        <group
          name='Area002'
          position={[7.068, -7.785, 1.371]}
          rotation={[1.591, -0.777, -1.55]}
          scale={[-11.858, 11.858, 11.858]}
        />
        <group
          name='Area003'
          position={[11.711, -3.164, -0.411]}
          rotation={[1.586, -0.301, -1.56]}
          scale={[-11.858, 11.858, 11.858]}
        />
      </group>
    </group>
  )
}
