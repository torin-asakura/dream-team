import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getTagColorsStyles = (theme, active): styleFn => {
  const tagDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.tag.fontColor,
    backgroundColor: theme.colors.button.tag.background,
    borderColor: theme.colors.button.tag.border,
  })

  const tagHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.tag.default,
    backgroundColor: theme.colors.button.tag.hover,
    borderColor: theme.colors.button.tag.background,
  })

  const tagActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.tag.default,
    backgroundColor: theme.colors.button.tag.active,
    borderColor: theme.colors.button.tag.background,
  })

  return () => ({
    ...tagDefaultColors(),
    '&:hover': {
      ...tagHoverColors(),
    },
    '&:active': {
      ...tagActiveColors(),
    },
    ...(active && tagActiveColors()),
  })
}

export { getTagColorsStyles }
