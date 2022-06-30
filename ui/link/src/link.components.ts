import * as Links           from '@atls-ui-parts/link'

import styled               from '@emotion/styled'

import { activeStyles }     from './link.styles'
import { hoverStyles }      from './link.styles'
import { transitionStyles } from './link.styles'

const applyStyles = (links): any =>
  Object.keys(links).reduce(
    (result, key) => ({
      ...result,
      [key]: styled(links[key])(hoverStyles, activeStyles, transitionStyles),
    }),
    {}
  )

const { Link, NextLink, NextNavLink } = applyStyles(Links)

export { Link, NextLink, NextNavLink }
