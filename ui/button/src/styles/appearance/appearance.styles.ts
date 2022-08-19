import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getGreyTagColorsStyles }     from './abstract'
import { getPrimaryColorsStyles }     from './abstract'
import { getSecondaryColorsStyles }   from './abstract'
import { getTertiaryColorsStyles }    from './abstract'
import { getTransparentColorsStyles } from './abstract'
import { getClipboardColorsStyles }   from './abstract'
import { getSocialColorsStyles }      from './abstract'
import { getTagColorsStyles }         from './abstract'

const getAppearanceStyles = (theme, active): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles(theme, active)
  const secondaryColorsStyles = getSecondaryColorsStyles(theme, active)
  const transparentColorsStyles = getTransparentColorsStyles(theme)
  const tertiaryColorsStyles = getTertiaryColorsStyles(theme, active)
  const clipboardColorsStyles = getClipboardColorsStyles(theme, active)
  const socialColorsStyles = getSocialColorsStyles(theme, active)
  const tagColorsStyles = getTagColorsStyles(theme, active)
  const greyTagColorsStyles = getGreyTagColorsStyles(theme, active)

  return switchProp(prop('colors', 'primary'), {
    primary: primaryColorsStyles,
    secondary: secondaryColorsStyles,
    tertiary: tertiaryColorsStyles,
    transparent: transparentColorsStyles,
    clipboard: clipboardColorsStyles,
    social: socialColorsStyles,
    tag: tagColorsStyles,
    greyTag: greyTagColorsStyles,
  })
}

export { getAppearanceStyles }
