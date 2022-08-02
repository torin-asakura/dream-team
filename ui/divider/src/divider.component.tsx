import styled    from '@emotion/styled'

import { color } from 'styled-system'

import { Box }   from '@ui/layout'

const Divider = styled(Box)(
  ({ weight = 1, direction = 'horizontal' }) => ({
    width: direction === 'horizontal' ? '100%' : weight,
    height: direction === 'vertical' ? '100%' : weight,
  }),
  color
)

export { Divider }
