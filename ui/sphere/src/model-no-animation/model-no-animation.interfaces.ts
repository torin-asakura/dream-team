import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFResult extends GLTF {
  nodes: {
    Sphere001: Mesh
    Sphere: Mesh
  }
  materials: {
    ['Material.001']: MeshStandardMaterial
    ['Material.002']: MeshStandardMaterial
  }
}
