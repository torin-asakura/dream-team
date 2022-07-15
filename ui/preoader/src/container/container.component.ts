import styled               from '@emotion/styled'

import { motion }           from 'framer-motion'

import { baseStyles }       from './container.styles'
import { appearanceStyles } from './container.styles'

export const Container = styled(motion.div)(baseStyles, appearanceStyles)
