import React                   from 'react'
import { FC }                  from 'react'

import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Box }                 from '@ui/layout'

import { Item }                from './item'
import { useData }             from './data'
import { LandingReviewsProps } from './landing-reviews.interface'

const LandingReviews: FC<LandingReviewsProps> = ({ language }) => {
  const reviews = useData()

  return (
    <Box px={['32px', '32px', '0px']} border='1px solid black'>
      <Layout flexGrow={1} />
      <Layout width='100%' maxWidth={1280}>
        <Column justifyContent='center' width='100%'>
          <Layout flexBasis={120} />
          <Row>
            <Box height={64} width='100%' border='1px solid black'>
              Отзывы клиентов
            </Box>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Box height={64} width='100%' border='1px solid black'>
              Arrows
            </Box>
          </Row>
          <Layout flexBasis={48} />
          <Row>
            {reviews.map((review) => (
              <>
                <Item review={review} />
                <Layout flexBasis={32} />
              </>
            ))}
          </Row>
          <Layout flexBasis={120} />
        </Column>
      </Layout>
      <Layout flexGrow={1} />
    </Box>
  )
}

export { LandingReviews }
