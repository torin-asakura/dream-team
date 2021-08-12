import React                   from 'react'
import { FC }                  from 'react'

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
import { useData }             from './data'
import { LandingReviewsProps } from './landing-reviews.interface'

const LandingReviews: FC<LandingReviewsProps> = ({ language }) => {
  const reviews = useData()
  const [swipeLeft, swipeRight, Carousel] = useCarousel()

  const filterByLanguage = ({ language: { code } }) => code === language

  return (
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
              <Button colors='transparent' width={44} onClick={swipeLeft}>
                <Layout>
                  <ArrowLeftIcon width={8} height={16} />
                </Layout>
              </Button>
              <Layout flexBasis={16} />
              <Button colors='transparent' width={44} onClick={swipeRight}>
                <Layout>
                  <ArrowRightIcon width={8} height={16} />
                </Layout>
              </Button>
            </Layout>
          </Row>
          <Layout flexBasis={48} />
          <Carousel spaceBetween={32}>
            {reviews.filter(filterByLanguage).map((review) => (
              <Item review={review} language={language} />
            ))}
          </Carousel>
          <Layout flexBasis={120} />
        </Column>
      </Layout>
    </Box>
  )
}

export { LandingReviews }
