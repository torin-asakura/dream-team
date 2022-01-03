import { styleFn } from 'styled-system'

const hoverStyles: styleFn = ({ theme, hoverColor = 'accent' }) => ({
  '&:hover': {
    color: theme.colors.text[hoverColor] ? theme.colors.text[hoverColor] : hoverColor,
  },
})

export { hoverStyles }
