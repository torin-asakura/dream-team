import styled             from '@emotion/styled'

import { motion }         from 'framer-motion'
import { position }       from 'styled-system'
import { flexbox }        from 'styled-system'
import { color }          from 'styled-system'

import { ContainerProps } from './container.interface'
import { baseStyles }     from './container.styles'

const Container = styled(motion.div)<ContainerProps>(baseStyles, flexbox, position, color)

export { Container }
