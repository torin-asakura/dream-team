import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFResult extends GLTF {
  nodes: {
    Sphere: Mesh
  }
  materials: {
    Displacer: MeshStandardMaterial
  }
}
