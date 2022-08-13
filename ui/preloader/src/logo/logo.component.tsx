import React                 from 'react'

import { AnimatedContainer } from './animated-container.component'
import { Container }         from './container.component'
import { Icon }              from './icon'

export const Logo = () => (
  <Container>
    <AnimatedContainer>
      <Icon />
    </AnimatedContainer>
  </Container>
)
