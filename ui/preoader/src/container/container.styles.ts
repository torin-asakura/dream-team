import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'

export const baseStyles: CSSObject = {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  flexDirection: 'column',
}

export const appearanceStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.background.hero,
})
