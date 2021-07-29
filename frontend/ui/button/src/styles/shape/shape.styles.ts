import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getSmallSizeStyles }  from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const smallSizeStyles = getSmallSizeStyles(theme)

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
    small: smallSizeStyles,
  })
}

export { getShapeStyles }
