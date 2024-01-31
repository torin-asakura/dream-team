import React           from 'react'
import { lazy }        from 'react'
import { memo }        from 'react'

import { CanvasInner } from './canvas-inner'
import { Loader }      from './loader'
import { SphereProps } from './sphere.interfaces'

const OldModelComponent = lazy(() =>
  import('./old-model').then(({ OldModel }) => ({ default: OldModel })))

export const OldSphere = memo<SphereProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <OldModelComponent />
    </Loader>
  </CanvasInner>
))
