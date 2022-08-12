import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getGreyTagColorsStyles = (theme, active): styleFn => {
  const greyTagDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.greyTag.fontColor,
    backgroundColor: theme.colors.button.greyTag.background,
    borderColor: theme.colors.button.greyTag.border,
  })

  const greyTagHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.greyTag.default,
    backgroundColor: theme.colors.button.greyTag.hover,
    borderColor: theme.colors.button.greyTag.background,
  })

  const greyTagActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.greyTag.default,
    backgroundColor: theme.colors.button.greyTag.active,
    borderColor: theme.colors.button.greyTag.background,
  })

  return () => ({
    ...greyTagDefaultColors(),
    '&:hover': {
      ...greyTagHoverColors(),
    },
    '&:active': {
      ...greyTagActiveColors(),
    },
    ...(active && greyTagActiveColors()),
  })
}

export { getGreyTagColorsStyles }
