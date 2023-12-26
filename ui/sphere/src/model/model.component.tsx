import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { GLTFResult }    from './model.interfaces'
import { GLTFAction }    from './model.interfaces'
import { ModelProps }    from './model.interfaces'
import { spherePath }    from '../sphere.constants'

export const Model: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(spherePath, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)

  useEffect(() => {
    actions.KeyAction?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Sphere'
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.001']}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
          rotation={[-1.359, -0.046, -0.073]}
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
          rotation={[-Math.PI, 0.996, 0.999]}
          scale={-11.858}
        />
        <group
          name='Area001'
          position={[3.488, 6.267, -6.024]}
          rotation={[0.046, 0.988, 2.081]}
          scale={-11.858}
        />
        <group
          name='Area002'
          position={[7.068, -7.785, 1.371]}
          rotation={[-1.551, 0.777, 1.55]}
          scale={-11.858}
        />
        <group
          name='Area003'
          position={[11.711, -3.164, -0.411]}
          rotation={[-1.556, 0.301, 1.56]}
          scale={-11.858}
        />
      </group>
    </group>
  )
}
