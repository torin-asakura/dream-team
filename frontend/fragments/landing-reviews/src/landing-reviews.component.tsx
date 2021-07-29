import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

import { Item }   from './item.component'

const LandingReviews: FC = () => (
  <Box border='1px solid black'>
    <Layout flexGrow={1} />
    <Layout width={1280}>
      <Column justifyContent='center' width='100%'>
        <Layout flexBasis={120} />
        <Row>
          <Box height={64} width='100%' border='1px solid black'>
            Отзывы клиентов
          </Box>
          <Layout flexGrow={1} />
          <Box height={64} width='100%' border='1px solid black'>
            Arrows
          </Box>
        </Row>
        <Layout flexBasis={48} />
        <Row>
          {[...Array(3)].map(() => (
            <>
              <Item />
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

export { LandingReviews }
