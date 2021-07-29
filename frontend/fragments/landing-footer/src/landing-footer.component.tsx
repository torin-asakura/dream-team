import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const LandingFooter: FC = () => (
  <Box height={248} border='1px solid blue'>
    <Layout flexGrow={1} />
    <Layout width={1280}>
      <Row>
        <Column>
          <Layout flexBasis={64} />
          <Box border='1px solid black' width={233} height={30} />
          <Layout flexBasis={60} />
          <Box border='1px solid black' width={126} height={24} />
        </Column>
        <Layout flexGrow={1} />
        <Column>
          <Layout flexBasis={64} />
          <Box border='1px solid black' width={243} height={32} />
          <Layout flexBasis={24} />
          <Box border='1px solid black' width={219} height={32} />
          <Layout flexBasis={8} />
          <Box border='1px solid black' width={233} height={24} />
        </Column>
      </Row>
    </Layout>
    <Layout flexGrow={1} />
  </Box>
)

export { LandingFooter }
