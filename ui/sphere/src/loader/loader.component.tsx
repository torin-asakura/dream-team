import { useGLTF }           from '@react-three/drei'
import { useProgress }       from '@react-three/drei'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Condition }         from '@ui/condition'

import { spherePath }        from '../sphere.constants'

export const Loader: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { active } = useProgress()

  return <Condition match={!active}>{children}</Condition>
}

useGLTF.preload(spherePath)
