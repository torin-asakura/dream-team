import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getSocialColorsStyles = (theme, active): styleFn => {
  const socialDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.social.fontColor,
    borderColor: theme.colors.button.social.borderColor,
    backgroundColor: theme.colors.button.social.default,
  })

  const socialHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.social.fontColor,
    borderColor: theme.colors.button.social.borderColor,
    backgroundColor: theme.colors.button.social.hover,
  })

  const socialActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.social.fontColor,
    borderColor: theme.colors.button.social.borderColor,
    backgroundColor: theme.colors.button.social.active,
  })

  return () => ({
    ...socialDefaultColors(),
    '&:hover': {
      ...socialHoverColors(),
    },
    '&:active': {
      ...socialActiveColors(),
    },
    ...(active && socialActiveColors()),
  })
}

export { getSocialColorsStyles }
