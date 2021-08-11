import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getPrimaryColorsStyles }     from './abstract'
import { getSecondaryColorsStyles }   from './abstract'
import { getTertiaryColorsStyles }    from './abstract'
import { getTransparentColorsStyles } from './abstract'

const getAppearanceStyles = (theme, active): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles(theme, active)
  const secondaryColorsStyles = getSecondaryColorsStyles(theme, active)
  const transparentColorsStyles = getTransparentColorsStyles(theme)
  const tertiaryColorsStyles = getTertiaryColorsStyles(theme, active)

  return switchProp(prop('colors', 'primary'), {
    primary: primaryColorsStyles,
    secondary: secondaryColorsStyles,
    tertiary: tertiaryColorsStyles,
    transparent: transparentColorsStyles,
  })
}

export { getAppearanceStyles }
