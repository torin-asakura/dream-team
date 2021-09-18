import React      from 'react'
import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter');

      html,
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }

      #__next {
        height: 100%;
      }
    `}
  />
)
