import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'clipboard' | 'social'
type ButtonSizes = 'normal' | 'big' | 'rounded'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  divider?: number
  rounded?: boolean
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
  colors?: ButtonColors
  size?: ButtonSizes
  dotted?: boolean
  active?: boolean
}
