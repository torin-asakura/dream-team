import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'

import { Button }              from '@ui/button'
import { useCarousel }         from '@ui/carousel'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { ArrowLeftIcon }       from '@ui/icons'
import { ArrowRightIcon }      from '@ui/icons'

import { messages }            from './messages'
import { Item }                from './item'
import { Popover }             from './popover'
import { useData }             from './data'
import { LandingReviewsProps } from './landing-reviews.interface'

const LandingReviews: FC<LandingReviewsProps> = ({ language }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const filterByLanguage = ({ language: { code } }) => code === language

  const reviews = useData().filter(filterByLanguage)
  const carouselChildren = reviews.map((review, index) => (
    <Item review={review} language={language} onClick={() => setActiveItem(index)} />
  ))

  const { carousel: desktopCarousel, useControls: useDesktopControls } = useCarousel({
    children: carouselChildren,
    spaceBetween: 32,
    slidesPerView: 3,
    height: 300,
    centered: true,
  })

  const { carousel: mobileCarousel, useControls: useMobileControls } = useCarousel({
    children: carouselChildren,
    spaceBetween: 32,
    slidesPerView: 1,
    height: 300,
    centered: true,
  })

  const { prevProp: desktopPrevProp, nextProp: desktopNextProp } = useDesktopControls()
  const { prevProp: mobilePrevProp, nextProp: mobileNextProp } = useMobileControls()

  return (
    <>
      <Popover
        visible={activeItem}
        setVisible={setActiveItem}
        reviews={reviews}
        language={language}
      />
      <Box
        px={['32px', '32px', '0px']}
        backgroundColor='background.lightGray'
        justifyContent='center'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column justifyContent='center' width='100%'>
            <Layout flexBasis={120} />
            <Row alignItems='center'>
              <Text color='text.black' fontWeight='slim' fontSize='massive'>
                {messages.reviews[language]}
              </Text>
              <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
              <Layout width={128}>
                <Layout display={['none', 'none', 'flex']}>
                  <Button colors='transparent' width={44} onClick={desktopPrevProp?.onClick}>
                    <Layout>
                      <ArrowLeftIcon width={8} height={16} />
                    </Layout>
                  </Button>
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <Button colors='transparent' width={44} onClick={mobilePrevProp?.onClick}>
                    <Layout>
                      <ArrowLeftIcon width={8} height={16} />
                    </Layout>
                  </Button>
                </Layout>
                <Layout flexBasis={16} />
                <Layout display={['none', 'none', 'flex']}>
                  <Button colors='transparent' width={44} onClick={desktopNextProp?.onClick}>
                    <Layout>
                      <ArrowRightIcon width={8} height={16} />
                    </Layout>
                  </Button>
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <Button colors='transparent' width={44} onClick={mobileNextProp?.onClick}>
                    <Layout>
                      <ArrowRightIcon width={8} height={16} />
                    </Layout>
                  </Button>
                </Layout>
              </Layout>
            </Row>
            <Layout flexBasis={48} />
            <Layout display={['none', 'none', 'flex']}>{desktopCarousel}</Layout>
            <Layout display={['flex', 'flex', 'none']}>{mobileCarousel}</Layout>
            <Layout flexBasis={120} />
          </Column>
        </Layout>
      </Box>
    </>
  )
}

export { LandingReviews }
