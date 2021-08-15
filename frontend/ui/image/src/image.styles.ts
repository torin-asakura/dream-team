import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ contain = false }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  objectFit: contain ? 'contain' : 'cover',
})

export const absoluteStyles: styleFn = ({ background = false }) => background && ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1
})
