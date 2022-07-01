import { createActiveStyles }     from './appearance'
import { createTransitionStyles } from './appearance'

export const activeStyles = createActiveStyles({ color: 'accent' })
export const transitionStyles = createTransitionStyles('.2s')
export { hoverStyles } from './appearance'
