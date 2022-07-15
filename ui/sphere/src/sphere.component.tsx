import useSpline              from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { Canvas }             from '@react-three/fiber'

import React                  from 'react'
import { Suspense }           from 'react'

const Sphere = (props) => {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/kV17TlAArZunhD1a/scene.splinecode'
  )
  return (
    <Canvas>
      <color attach='background' args={['#676aaa']} />
      <group {...props} dispose={null}>
        <OrthographicCamera
          name='Camera'
          makeDefault
          zoom={1.85}
          far={100000}
          near={-100000}
          position={[-19.25, -11.11, 1060.14]}
        />
        <group name='Main' position={[0, 0, 0.97]}>
          <mesh
            name='Sphere 9'
            geometry={nodes['Sphere 9'].geometry}
            material={materials['Sphere 9 Material']}
            receiveShadow
            position={[35.74, 82.57, 63.57]}
            rotation={[2.87, 1.22, 2.73]}
          />
          <mesh
            name='Sphere 8'
            geometry={nodes['Sphere 8'].geometry}
            material={materials['Sphere 8 Material']}
            receiveShadow
            position={[-55.07, 69.95, 30.72]}
            rotation={[0.06, 0.45, -0.65]}
          />
          <mesh
            name='Sphere 7'
            geometry={nodes['Sphere 7'].geometry}
            material={materials['Sphere 7 Material']}
            receiveShadow
            position={[-99.53, 14.11, -17.74]}
            rotation={[0.13, -0.3, -0.24]}
          />
          <mesh
            name='Sphere 6'
            geometry={nodes['Sphere 6'].geometry}
            material={materials['Sphere 6 Material']}
            receiveShadow
            position={[61.55, 69.19, -26.34]}
            rotation={[-0.22, 0.44, 0.49]}
          />
          <mesh
            name='Sphere 5'
            geometry={nodes['Sphere 5'].geometry}
            material={materials['Sphere 5 Material']}
            receiveShadow
            position={[-7.61, -23.03, 80.41]}
            rotation={[0.26, 0, 0]}
          />
          <mesh
            name='Sphere 4'
            geometry={nodes['Sphere 4'].geometry}
            material={materials['Sphere 4 Material']}
            receiveShadow
            position={[36.59, -71.1, 49.58]}
            rotation={[-0.53, -0.33, 0.5]}
          />
          <mesh
            name='Sphere 3'
            geometry={nodes['Sphere 3'].geometry}
            material={materials['Sphere 3 Material']}
            receiveShadow
            position={[76.31, 10.28, 56.61]}
            rotation={[0, -0.68, 0.03]}
          />
          <mesh
            name='Sphere 2'
            geometry={nodes['Sphere 2'].geometry}
            material={materials['Sphere 2 Material']}
            receiveShadow
            position={[-77.28, -36.8, 27.01]}
            rotation={[0.04, 0.45, 0.26]}
          />
          <group name='Orbit  2 (group)' rotation={[-Math.PI / 4, -Math.PI / 4, 0]}>
            <mesh
              name='Orbit 2'
              geometry={nodes['Orbit 2'].geometry}
              material={materials['Orbit 2 Material']}
              receiveShadow
            />
          </group>
          <group name='Orbit  1 (group)' rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name='Orbit 1'
              geometry={nodes['Orbit 1'].geometry}
              material={materials['Orbit 1 Material']}
              receiveShadow
            />
          </group>
          <mesh
            name='Boolean'
            geometry={nodes.Boolean.geometry}
            material={materials['Boolean Material']}
            castShadow
            receiveShadow
            position={[0, 0, -0.97]}
          >
            <mesh
              name='Helix'
              geometry={nodes.Helix.geometry}
              material={materials['Helix Material']}
              visible={false}
              castShadow
              receiveShadow
              position={[0, -30, 0]}
            />
            <mesh
              name='Sphere'
              geometry={nodes.Sphere.geometry}
              material={materials['Sphere Material']}
              visible={false}
              castShadow
              receiveShadow
            />
          </mesh>
        </group>
        <hemisphereLight
          name='Default Ambient Light'
          intensity={3.1}
          color='#eaeaea'
          position={[0, 1, 0]}
        />
      </group>
    </Canvas>
  )
}

export default () => (
  <Suspense fallback={null}>
    <Sphere />
  </Suspense>
)
