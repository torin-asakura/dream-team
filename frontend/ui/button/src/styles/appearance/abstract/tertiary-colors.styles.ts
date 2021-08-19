import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'

const getTertiaryColorsStyles = (theme, active): styleFn => {
  const tertiaryDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.tertiary.fontColor,
    backgroundColor: theme.colors.button.tertiary.default,
  })

  const tertiaryActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.tertiary.activeFontColor,
    backgroundColor: theme.colors.button.tertiary.active,
  })

  return () => ({
    ...tertiaryDefaultColors(),
    ...(active && tertiaryActiveColors()),
    '&:hover': {
      ...tertiaryActiveColors(),
    },
    '&:active': {
      ...tertiaryActiveColors(),
    },
  })
}

export { getTertiaryColorsStyles }
