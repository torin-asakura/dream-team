import NextImage      from 'next/image'
import React          from 'react'

import { SpherePng }  from '../assets'
import { ImageProps } from './image.interface'

const Image = ({
  src,
  contain = false,
  width = '100%',
  height = '100%',
  ...props
}: ImageProps & any) => (
  <NextImage
    objectFit={contain ? 'contain' : 'cover'}
    src={src && JSON.stringify(src) !== JSON.stringify({}) ? src : SpherePng.src}
    width={width}
    height={height}
    {...props}
  />
)

export { Image }
