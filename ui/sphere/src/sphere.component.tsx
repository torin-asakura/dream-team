import React           from 'react'
import { lazy }        from 'react'
import { memo }        from 'react'

import { CanvasInner } from './canvas-inner'
import { Loader }      from './loader'
import { SphereProps } from './sphere.interfaces'

const ModelComponent = lazy(() => import('./model').then(({ Model }) => ({ default: Model })))
const ModelNoAnimationComponent = lazy(() =>
  import('./model-no-animation').then(({ ModelNoAnimation }) => ({ default: ModelNoAnimation })))

export const Sphere = memo<SphereProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <ModelComponent />
    </Loader>
    <Loader>
      <ModelNoAnimationComponent />
    </Loader>
  </CanvasInner>
))
