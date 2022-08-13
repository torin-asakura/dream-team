import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getClipboardColorsStyles = (theme, active): styleFn => {
  const clipboardDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.clipboard.fontColor,
    borderColor: theme.colors.button.clipboard.default,
    backgroundColor: theme.colors.button.clipboard.background,
  })

  const clipboardHoverColors = createAppearanceStyles({
    fontColor: theme.colors.button.clipboard.fontColor,
    borderColor: theme.colors.button.clipboard.hover,
    backgroundColor: theme.colors.button.clipboard.background,
  })

  const clipboardActiveColors = createAppearanceStyles({
    fontColor: theme.colors.button.clipboard.fontColor,
    borderColor: theme.colors.button.clipboard.default,
    backgroundColor: theme.colors.button.clipboard.active,
  })

  return () => ({
    ...clipboardDefaultColors(),
    '&:hover': {
      ...clipboardHoverColors(),
    },
    '&:active': {
      ...clipboardActiveColors(),
    },
    ...(active && clipboardActiveColors()),
  })
}

export { getClipboardColorsStyles }
