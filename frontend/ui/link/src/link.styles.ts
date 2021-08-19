import { createActiveStyles }     from './appearance'
import { createHoverStyles }      from './appearance'
import { createTransitionStyles } from './appearance'

export const activeStyles = createActiveStyles({ color: 'accent' })
export const hoverStyles = createHoverStyles({ color: 'accent' })
export const transitionStyles = createTransitionStyles('.2s')
