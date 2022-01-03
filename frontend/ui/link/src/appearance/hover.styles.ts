import { styleFn } from 'styled-system'

const hoverStyles = ({ theme, hoverColor = 'accent' }): styleFn => ({
  '&:hover': {
    color: theme.colors.text[hoverColor] ? theme.colors.text[hoverColor] : hoverColor,
  },
})

export { hoverStyles }
