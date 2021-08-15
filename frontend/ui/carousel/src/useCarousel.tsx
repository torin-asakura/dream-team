import React             from 'react'
import { FC }            from 'react'
import { useRef }        from 'react'
import { useState }      from 'react'
import { useEffect }     from 'react'

import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'

import { UseCarousel }   from './carousel.interface'
import { CarouselProps } from './carousel.interface'
import { Item }          from './item'

const useCarousel: UseCarousel = (duration = 1) => {
  const [spaceBetween, setSpaceBetween] = useState<number>(0)
  const [max, setMax] = useState<number>(0)
  const itemNode = useRef(null)
  const containerNode = useRef(null)
  let position = 0

  const swipeRight = () => {
    // @ts-ignore
    const delta = itemNode.current.offsetWidth + spaceBetween
    position = position === max ? position : position + 1
    // @ts-ignore
    containerNode.current.scroll({ left: delta * position, behavior: 'smooth' })
  }

  const swipeLeft = () => {
    // @ts-ignore
    const delta = itemNode.current.offsetWidth + spaceBetween
    position = position === 0 ? position : position - 1
    // @ts-ignore
    containerNode.current.scroll({ left: delta * position, behavior: 'smooth' })
  }

  // eslint-disable-next-line
  const Carousel: FC<CarouselProps> = ({ children, spaceBetween }) => {
    setSpaceBetween(spaceBetween)
    useEffect(() => {
      setMax(children.length)
    }, [children])
    return (
      <Row overflowX='scroll' ref={containerNode}>
        <div>
          <Layout width='100%' justifyContent='center' alignItems='center' overflow='hidden'>
            {(children || []).map((child) => (
              <>
                <Item offset={spaceBetween} ref={itemNode}>
                  {child}
                </Item>
              </>
            ))}
          </Layout>
        </div>
      </Row>
    )
  }

  return [swipeLeft, swipeRight, Carousel]
}

export { useCarousel }
