import styled   from '@emotion/styled'

import { Text } from './index'

const TextEllipsis = styled(Text)(({ lineClamp }) => ({
  display: '-webkit-box',
  '-webkit-line-clamp': `${lineClamp}`,
  '-webkit-box-orient': 'vertical',
}))

export { TextEllipsis }
