import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'

import React         from 'react'
import { useEffect } from 'react'
import { polyfill }  from 'seamless-scroll-polyfill'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Global
      styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

      html,
      body,
      #__next {        
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }

      #__next {
        display: flex;
        flex-direction: column;
      }
      
      @keyframes draw {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .grecaptcha-badge {
          display: none;
        }
    `}
    />
  )
}
