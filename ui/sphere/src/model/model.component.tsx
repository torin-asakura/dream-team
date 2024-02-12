import { useAnimations }   from '@react-three/drei'
import { useGLTF }         from '@react-three/drei'

import React               from 'react'
import { FC }              from 'react'
import { Group }           from 'three'
import { useEffect }       from 'react'
import { useRef }          from 'react'

import { CDN_SPHERE_PATH } from '../sphere.constants'
import { GLTFResult }      from './model.interfaces'
import { GLTFAction }      from './model.interfaces'
import { ModelProps }      from './model.interfaces'

export const Model: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(CDN_SPHERE_PATH, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)

  useEffect(() => {
    actions.KeyAction?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Sphere'
          geometry={nodes.Sphere.geometry}
          material={materials['Material.001']}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
          rotation={[0.211, -0.63, -0.018]}
          scale={[1, -1, -1]}
        />
      </group>
    </group>
  )
}
