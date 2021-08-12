import styled                from '@emotion/styled'
import { flexbox, position } from 'styled-system'

import { ContainerProps }    from './container.interface'
import { baseStyles }        from './container.styles'
import { appearanceStyles }  from './container.styles'

const Container = styled.div<ContainerProps>(baseStyles, appearanceStyles, flexbox, position)

export { Container }
