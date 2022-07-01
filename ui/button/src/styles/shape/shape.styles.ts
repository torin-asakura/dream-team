import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getBigSizeStyles }    from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const bigSizeStyles = getBigSizeStyles(theme)

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
    big: bigSizeStyles,
  })
}

export { getShapeStyles }
