import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'

const getTransparentColorsStyles = (theme): styleFn => {
  const transparentDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.transparent.fontColor,
    backgroundColor: 'transparent',
  })

  return transparentDefaultColors
}

export { getTransparentColorsStyles }
