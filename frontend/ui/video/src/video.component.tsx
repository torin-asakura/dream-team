import React        from 'react'
import styled       from '@emotion/styled'
import { layout }   from 'styled-system'
import { position } from 'styled-system'

const StyledVideo = styled.video(
  {
    position: 'relative',
    transform: 'translate(0, -50%)',
    zIndex: 1,
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
