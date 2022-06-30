import { Canvas }    from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'

import React         from 'react'
import { Suspense }  from 'react'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export const Sphere = () => {
  const mtl = useLoader(MTLLoader, 'sphere.mtl')

  const obj = useLoader(OBJLoader, 'sphere.obj', (loader) => {
    ;(mtl as any).preload()
    loader.setMaterials(mtl)
  })

  return (
    <Canvas>
      <Suspense fallback={null}>
        <primitive object={obj} />
      </Suspense>
    </Canvas>
  )
}
