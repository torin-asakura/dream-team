import React                from 'react'
import { FC }               from 'react'
import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'
import { layout }           from 'styled-system'
import { space }            from 'styled-system'

import { ButtonProps }      from './button.interfaces'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { appearanceStyles } from './button.styles'

export const ButtonElement = styled.button<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  layout,
  space
)

export const Button: FC<ButtonProps> = ({
  divider = 12,
  rounded = false,
  children,
  dotted = false,
  active = false,
  ...props
}) => (
  <ButtonElement rounding={rounded && 20} active={active} {...props}>
    <Content divider={divider}>{children}</Content>
  </ButtonElement>
)
