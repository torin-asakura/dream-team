import { getBaseStyles }       from './styles'
import { getAppearanceStyles } from './styles'
import { getShapeStyles }      from './styles'

export const baseStyles = getBaseStyles()

export const appearanceStyles = ({ theme, active }) => getAppearanceStyles(theme, active)

export const shapeStyles = ({ theme }) => getShapeStyles(theme)
