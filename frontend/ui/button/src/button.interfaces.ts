import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'
import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'clipboard'
type ButtonSizes = 'normal' | 'big'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  divider?: number
  rounded?: boolean
  width?: number | string | number[] | string[]
  colors?: ButtonColors
  size?: ButtonSizes
  dotted?: boolean
  active?: boolean
}
