import { useGLTF }                      from '@react-three/drei'
import { useProgress }                  from '@react-three/drei'

import React                            from 'react'
import { FC }                           from 'react'
import { Group }                        from 'three'
import { useRef }                       from 'react'

import { Condition }                    from '@ui/condition'

import { CDN_SPHERE_NO_ANIMATION_PATH } from '../sphere.constants'
import { GLTFResult }                   from './model-no-animation.interfaces'
import { ModelProps }                   from './model-no-animation.interfaces'

export const ModelNoAnimation: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF(CDN_SPHERE_NO_ANIMATION_PATH, true) as unknown as GLTFResult
  const { active } = useProgress()

  return (
    <Condition match={active}>
      <group ref={group} {...props} dispose={null}>
        <group name='Scene'>
          <mesh
            name='Sphere'
            geometry={nodes.Sphere.geometry}
            material={materials['Material.001']}
            rotation={[0.291, -0.565, 0.114]}
            scale={[1, 1, 1]}
          />
        </group>
      </group>
    </Condition>
  )
}
