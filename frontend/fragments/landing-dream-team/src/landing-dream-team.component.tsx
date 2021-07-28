import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

import { Item }   from './item.component'

const LandingDreamTeam: FC = () => (
  <Box height={830} border='1px solid black'>
    <Layout flexGrow={1} />
    <Layout width={1280}>
      <Column justifyContent='center'>
        <Layout flexBasis={152} />
        <Box height={64} border='1px solid black'>
          Dream team
        </Box>
        <Layout flexBasis={74} />
        <Row>
          <Item />
          <Item />
          <Item />
        </Row>
        <Layout flexBasis={160} />
      </Column>
    </Layout>
    <Layout flexGrow={1} />
  </Box>
)

export { LandingDreamTeam }
