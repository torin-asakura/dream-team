import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getPrimaryColorsStyles = (theme, active): styleFn => {
  const primaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: theme.colors.button.primary.default,
    borderColor: theme.colors.button.primary.default,
  })

  const primaryHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: theme.colors.button.primary.hover,
    borderColor: theme.colors.button.primary.hover,
  })

  const primaryActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: theme.colors.button.primary.active,
    borderColor: theme.colors.button.primary.active,
  })

  return () => ({
    ...primaryDefaultColors(),
    '&:hover': {
      ...primaryHoverColors(),
    },
    '&:active': {
      ...primaryActiveColors(),
    },
    ...(active && primaryActiveColors()),
  })
}

export { getPrimaryColorsStyles }
