import React                    from 'react'
import { FC }                   from 'react'
import { Children }             from 'react'
import { Swiper as SwiperCore } from 'swiper'
import { useState }             from 'react'

import { Button }               from '@ui/button'
import { Swiper }               from '@ui/carousel'
import { SwiperSlide }          from '@ui/carousel'
import { ArrowLeftIcon }        from '@ui/icons'
import { ArrowRightIcon }       from '@ui/icons'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Text }                 from '@ui/text'
import { useSwiper }            from '@ui/carousel'

import { Item }                 from './item'
import { LandingReviewsProps }  from './landing-reviews.interface'
import { Popover }              from './popover'
import { messages }             from './messages'

const LandingReviews: FC<LandingReviewsProps> = ({ language, data }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [desktopSwiper, setDesktopSwiper] = useState<SwiperCore | null>(null)
  const [mobileSwiper, setMobileSwiper] = useState<SwiperCore | null>(null)

  const carouselChildren = data[language].map((review, index) => (
    <Item
      review={review}
      key={review.title}
      language={language}
      onClick={() => setActiveItem(index)}
    />
  ))

  const CarouselControlsExporter = ({ swiper, setSwiper }) => {
    const swiperInstance = useSwiper()

    if (!swiper) setSwiper(swiperInstance)

    return null
  }

  return (
    <>
      <Popover
        visible={activeItem}
        setVisible={setActiveItem}
        reviews={data[language]}
        language={language}
      />
      <Box
        pl={['20px', '20px', '0px']}
        backgroundColor='background.lightGray'
        justifyContent='center'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column justifyContent='center' width='100%'>
            <Layout flexBasis={[48, 48, 120]} />
            <Row width='100%' alignItems='center'>
              <Layout minWidth={['100%', 'auto', 'auto']}>
                <Text
                  color='text.black'
                  fontWeight='slim'
                  fontSize={['increased', 'increased', 'massive']}
                >
                  {messages.reviews[language]}
                </Text>
              </Layout>
              <Layout flexGrow={1} />
              <Layout width={128}>
                <Layout display={['none', 'none', 'flex']}>
                  <Button
                    colors='transparent'
                    width={56}
                    height={56}
                    onClick={() => desktopSwiper?.slidePrev()}
                  >
                    <Layout>
                      <ArrowLeftIcon width={8} height={16} />
                    </Layout>
                  </Button>
                </Layout>
                <Layout flexBasis={16} />
                <Layout display={['none', 'none', 'flex']}>
                  <Button
                    colors='transparent'
                    width={56}
                    height={56}
                    onClick={() => desktopSwiper?.slideNext()}
                  >
                    <Layout>
                      <ArrowRightIcon width={8} height={16} />
                    </Layout>
                  </Button>
                </Layout>
              </Layout>
            </Row>
            <Layout flexBasis={[24, 24, 48]} />
            <Layout display={['none', 'none', 'flex']}>
              <Swiper
                slidesPerView={3}
                spaceBetween={32}
                height={300}
                threshold={5}
                touchEventsTarget='container'
                preventClicks={false}
                loop
                grabCursor
              >
                <CarouselControlsExporter swiper={desktopSwiper} setSwiper={setDesktopSwiper} />
                {Children.map(carouselChildren, (child) => (
                  <SwiperSlide key={child.key}>{child}</SwiperSlide>
                ))}
              </Swiper>
            </Layout>
            <Layout display={['flex', 'none', 'none']}>
              <Swiper
                slidesPerView={2}
                spaceBetween={270}
                height={300}
                touchEventsTarget='container'
                preventClicks={false}
                loop
                grabCursor
              >
                <CarouselControlsExporter swiper={mobileSwiper} setSwiper={setMobileSwiper} />
                {Children.map(carouselChildren, (child) => (
                  <SwiperSlide key={child.key}>{child}</SwiperSlide>
                ))}
              </Swiper>
            </Layout>
            <Layout display={['none', 'flex', 'none']}>
              <Swiper
                slidesPerView={2}
                spaceBetween={100}
                height={300}
                touchEventsTarget='container'
                preventClicks={false}
                loop
                grabCursor
              >
                <CarouselControlsExporter swiper={mobileSwiper} setSwiper={setMobileSwiper} />
                {Children.map(carouselChildren, (child) => (
                  <SwiperSlide key={child.key}>{child}</SwiperSlide>
                ))}
              </Swiper>
            </Layout>
            <Layout flexBasis={[60, 60, 120]} />
          </Column>
        </Layout>
      </Box>
    </>
  )
}

export { LandingReviews }
