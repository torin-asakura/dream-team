import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getSmallSizeStyles = (theme): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 36,
    fontSize: 14,
    rounding: 8,
    fontWeight: 500,
    fontFamily: theme.fonts.primary,
  })

  return normalSizeStyles
}

export { getSmallSizeStyles }
