import styled     from '@emotion/styled'
import { layout } from 'styled-system'

const Video = styled.video(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    objectFit: 'cover',
  },
  layout
)

export { Video }
