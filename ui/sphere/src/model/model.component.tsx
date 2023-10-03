import { useFrame } from '@react-three/fiber'

import React        from 'react'
import { FC }       from 'react'
import { Mesh }     from 'three'
import { useRef }   from 'react'

import vertexPars from './shaders/vertex_pars.glsl';
import vertexMain from './shaders/vertex_main.glsl';
import fragmentPars from './shaders/fragment_pars.glsl';
import fragmentMain from './shaders/fragment_main.glsl';

const parsVertexString = `#include <displacementmap_pars_vertex>`;
const mainVertexString = `#include <displacementmap_vertex>`;
const mainFragmentString = `#include <normal_fragment_maps>`;
const parsFragmentString = `#include <bumpmap_pars_fragment>`;

const animationSpeed = 0.1

export const Model: FC = () => {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current && mesh.current.userData.shader) {
      const shaderMaterial = mesh.current.userData.shader;

      shaderMaterial.uniforms.uTime.value = animationSpeed * clock.getElapsedTime();
    }
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 300]} />
      <meshStandardMaterial
        onBeforeCompile={(shader) => {
          shader.uniforms.uTime = { value: 0 };

          shader.vertexShader = shader.vertexShader.replace(
            parsVertexString,
            `${parsVertexString} \n ${vertexPars}`,
          );

          shader.vertexShader = shader.vertexShader.replace(
            mainVertexString,
            `${mainVertexString} \n ${vertexMain}`,
          );

          shader.fragmentShader = shader.fragmentShader.replace(
            parsFragmentString,
            `${parsFragmentString} \n ${fragmentPars}`,
          );

          shader.fragmentShader = shader.fragmentShader.replace(
            mainFragmentString,
            `${mainFragmentString} \n ${fragmentMain}`,
          );

          if (mesh.current) {
            mesh.current.userData.shader = shader;
          }
        }}
      />
    </mesh>
  )
}
