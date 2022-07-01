import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getSecondaryColorsStyles = (theme, active): styleFn => {
  const secondaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.default,
    borderColor: theme.colors.button.secondary.background,
    backgroundColor: theme.colors.button.secondary.background,
  })

  const secondaryHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.hover,
    borderColor: theme.colors.button.secondary.background,
    backgroundColor: theme.colors.button.secondary.background,
  })

  const secondaryActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.active,
    borderColor: theme.colors.button.secondary.background,
    backgroundColor: theme.colors.button.secondary.background,
  })

  return () => ({
    ...secondaryDefaultColors(),
    '&:hover': {
      ...secondaryHoverColors(),
    },
    '&:active': {
      ...secondaryActiveColors(),
    },
    ...(active && secondaryActiveColors()),
  })
}

export { getSecondaryColorsStyles }
