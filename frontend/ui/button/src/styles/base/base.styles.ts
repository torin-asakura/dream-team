import { createBaseStyles } from '@atls-ui-parts/button'
import { styleFn }          from 'styled-system'

import { createTextStyles } from './factories'

const getBaseStyles = (): styleFn => {
  const baseStyles = createBaseStyles()
  const textStyles = createTextStyles()

  return () => ({
    ...baseStyles(),
    ...textStyles(),
  })
}

export { getBaseStyles }
