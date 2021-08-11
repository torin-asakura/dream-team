import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'
import { LayoutProps }                    from 'styled-system'

type ButtonColors = 'primary' | 'secondary' | 'transparent'
type ButtonSizes = 'normal' | 'big'

export interface ButtonProps extends BaseButtonProps, LayoutProps {
  divider?: number
  rounded?: boolean
  width?: number | string | number[] | string[]
  colors?: ButtonColors
  size?: ButtonSizes
  dotted?: boolean
  active?: boolean
}
