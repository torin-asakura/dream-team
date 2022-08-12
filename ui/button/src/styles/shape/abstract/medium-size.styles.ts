import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMediumSizeStyles = (theme): styleFn => {
  const mediumSizeStyles = createShapeStyles({
    size: 40,
    fontSize: theme.fontSizes.semiRegular,
    rounding: theme.radii.huge,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
    paddingLeft: 12,
    paddingRight: 12,
    paddingRatio: 0,
  })

  return mediumSizeStyles
}

export { getMediumSizeStyles }
