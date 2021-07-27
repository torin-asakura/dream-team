import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (theme): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 48,
    fontSize: 16,
    rounding: 8,
    fontWeight: 500,
    fontFamily: theme.fonts.primary,
  })

  return normalSizeStyles
}

export { getNormalSizeStyles }
