import { FC } from 'react'

type Callback = () => void

export interface CarouselProps {
  spaceBetween: number
  children: any
}

export type UseCarousel = (duration?: number) => [Callback, Callback, FC<CarouselProps>]
