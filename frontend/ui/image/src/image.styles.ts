import { styleFn } from 'styled-system'

export const baseStyles: styleFn = () => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
})

export const imageStyles: styleFn = ({ url, actualSize }) => ({
  backgroundImage: `url(${url})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: !actualSize && 'cover',
  backgroundPosition: 'center',
})
