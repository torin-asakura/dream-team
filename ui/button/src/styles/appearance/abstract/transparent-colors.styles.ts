import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getTransparentColorsStyles = (theme): styleFn => {
  const transparentDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.transparent.fontColor,
    borderColor: theme.colors.button.transparent.default,
    backgroundColor: theme.colors.button.transparent.backgroundColor,
  })

  const transparentHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.transparent.hover,
    borderColor: theme.colors.button.transparent.hover,
    backgroundColor: theme.colors.button.transparent.backgroundColor,
  })

  const transparentActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.transparent.active,
    borderColor: theme.colors.button.transparent.active,
    backgroundColor: theme.colors.button.transparent.backgroundColor,
  })

  return () => ({
    ...transparentDefaultColors(),
    '&:hover': {
      ...transparentHoverColors(),
    },
    '&:active': {
      ...transparentActiveColors(),
    },
  })
}

export { getTransparentColorsStyles }
