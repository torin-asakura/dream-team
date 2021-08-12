import { styleFn }    from 'styled-system'
import { switchProp } from 'styled-tools'

const createOpacityStyles = (): styleFn =>
  switchProp('opacity', () => ({
    small: {
      background: 'rgba(0, 0, 0, 0.4)',
    },
    large: {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    none: {
      background: 'rgba(0, 0, 0, 0)',
    },
  }))

const createAppearanceStyles = (): styleFn => createOpacityStyles()

export { createAppearanceStyles }
