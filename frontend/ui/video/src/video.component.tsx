import React        from 'react'
import styled       from '@emotion/styled'
import { layout }   from 'styled-system'
import { position } from 'styled-system'

const StyledVideo = styled.video(
  {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
  },
  layout,
  position
)

const Video = ({ src = [], mime = [], ...props }) => (
  <StyledVideo {...props}>
    {src && typeof src === 'string' && typeof mime === 'string' ? (
      <source src={src} type={mime} />
    ) : (
      src.map((item, index) => <source src={item} type={mime[index]} />)
    )}
  </StyledVideo>
)

export { Video }
