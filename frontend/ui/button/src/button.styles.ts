import { getBaseStyles }       from './styles'
import { getAppearanceStyles } from './styles'
import { getShapeStyles }      from './styles'

export const baseStyles = getBaseStyles()

export const appearanceStyles = ({ theme }) => getAppearanceStyles(theme)

export const shapeStyles = ({ theme }) => getShapeStyles(theme)
