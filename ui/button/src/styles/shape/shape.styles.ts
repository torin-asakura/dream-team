import { styleFn }              from 'styled-system'
import { switchProp }           from 'styled-tools'
import { prop }                 from 'styled-tools'

import { getNormalSizeStyles }  from './abstract'
import { getBigSizeStyles }     from './abstract'
import { getRoundedSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const bigSizeStyles = getBigSizeStyles(theme)
  const roundedSizeStyles = getRoundedSizeStyles(theme)

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
    big: bigSizeStyles,
    rounded: roundedSizeStyles,
  })
}

export { getShapeStyles }
