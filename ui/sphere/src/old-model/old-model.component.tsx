import { useGLTF }       from '@react-three/drei'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { useRef }        from 'react'

import { OldSphereGltf } from '../../assets'
import { GLTFResult }    from './old-model.interfaces'
import { ModelProps }    from './old-model.interfaces'

export const OldModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF(OldSphereGltf, true) as unknown as GLTFResult

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Sphere'
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Displacer}
          rotation={[Math.PI / 2, Math.PI, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}
