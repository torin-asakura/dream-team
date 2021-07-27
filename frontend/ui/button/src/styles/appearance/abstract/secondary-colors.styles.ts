import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'

const getSecondaryColorsStyles = (theme): styleFn => {
  const secondaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.default,
    borderColor: theme.colors.button.secondary.default,
    backgroundColor: theme.colors.button.secondary.backgroundColor,
  })

  const secondaryHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.hover,
    borderColor: theme.colors.button.secondary.hover,
    backgroundColor: theme.colors.button.secondary.backgroundColor,
  })

  const secondaryActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.secondary.active,
    borderColor: theme.colors.button.secondary.active,
    backgroundColor: theme.colors.button.secondary.backgroundColor,
  })

  return () => ({
    ...secondaryDefaultColors(),
    '&:hover': {
      ...secondaryHoverColors(),
    },
    '&:active': {
      ...secondaryActiveColors(),
    },
  })
}

export { getSecondaryColorsStyles }
