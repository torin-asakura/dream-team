import styled          from '@emotion/styled'

import { imageStyles } from './image.styles'
import { baseStyles }  from './image.styles'
import { ImageProps }  from './image.interface'

const Image = styled.div<ImageProps>(baseStyles, imageStyles)

export { Image }
