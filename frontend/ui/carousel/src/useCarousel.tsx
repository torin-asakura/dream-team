import React             from 'react'
import { FC }            from 'react'
import { useRef }        from 'react'
import { useState }      from 'react'
import { motion }        from 'framer-motion'
import { useAnimation }  from 'framer-motion'

import { Layout }        from '@ui/layout'

import { UseCarousel }   from './carousel.interface'
import { CarouselProps } from './carousel.interface'
import { Item }          from './item'

const useCarousel: UseCarousel = (duration = 1) => {
  const [spaceBetween, setSpaceBetween] = useState<number>(0)
  const [position, setPosition] = useState<number>(1)
  const main = useAnimation()
  const itemNode = useRef(null)

  const swipeRight = () => {
    // @ts-ignore
    const delta = itemNode.current.offsetWidth + spaceBetween
    main
      .start({
        x: -delta * position,
        transition: { duration },
      })
      .then(() => setPosition(position + 1))
  }

  const swipeLeft = () => {
    // @ts-ignore
    const delta = itemNode.current.offsetWidth + spaceBetween
    main
      .start({
        x: delta * position,
        transition: { duration },
      })
      .then(() => setPosition(position - 1))
  }

  const Carousel: FC<CarouselProps> = ({ children, spaceBetween }) => {
    let summaryOffset = 0

    setSpaceBetween(spaceBetween)
    return (
      <motion.div
        onPan={(e, { offset }) => {
          main.start({
            x: summaryOffset + offset.x,
          })
          summaryOffset += offset.x
        }}
      >
        <Layout width='100%' justifyContent='center' alignItems='center' overflow='hidden'>
          {(children || []).map((child) => (
            <>
              <Item offset={spaceBetween} animate={main} ref={itemNode}>
                {child}
              </Item>
            </>
          ))}
        </Layout>
      </motion.div>
    )
  }

  return [swipeLeft, swipeRight, Carousel]
}

export { useCarousel }
