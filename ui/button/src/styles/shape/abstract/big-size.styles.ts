import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getBigSizeStyles = (theme): styleFn => {
  const bigSizeStyles = createShapeStyles({
    size: 52,
    fontSize: theme.fontSizes.semiRegular,
    rounding: theme.radii.huge,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
  })

  return bigSizeStyles
}

export { getBigSizeStyles }
