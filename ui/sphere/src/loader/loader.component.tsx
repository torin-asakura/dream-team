import { useGLTF }           from '@react-three/drei'

import React                 from 'react'
import { Suspense }          from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { SphereGltf }        from '../../assets'

export const Loader: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Suspense fallback={null}>{children}</Suspense>
)

useGLTF.preload(SphereGltf)
