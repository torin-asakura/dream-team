import styled             from '@emotion/styled'

import { baseStyles }     from './image.styles'
import { absoluteStyles } from './image.styles'
import { ImageProps }     from './image.interface'

const Image = styled.img<ImageProps>(baseStyles, absoluteStyles)

export { Image }
