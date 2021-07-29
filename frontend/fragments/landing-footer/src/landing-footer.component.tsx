import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const LandingFooter: FC = () => (
  <Box px={['32px', '32px', '0px']} height={248} border='1px solid blue'>
    <Column width='100%' justifyContent='center' alignItems='center'>
      <Layout width='100%' maxWidth={1280}>
        <Row>
          <Column width='100%'>
            <Box border='1px solid black' width='100%' maxWidth={233} height={30} />
            <Layout flexBasis={60} />
            <Box border='1px solid black' width='100%' maxWidth={126} height={24} />
          </Column>
          <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
          <Column width='100%' alignItems='flex-end'>
            <Box border='1px solid black' width='100%' maxWidth={243} height={32} />
            <Layout flexBasis={24} />
            <Box border='1px solid black' width='100%' maxWidth={219} height={32} />
            <Layout flexBasis={8} />
            <Box border='1px solid black' width='100%' maxWidth={233} height={24} />
          </Column>
        </Row>
      </Layout>
    </Column>
  </Box>
)

export { LandingFooter }
