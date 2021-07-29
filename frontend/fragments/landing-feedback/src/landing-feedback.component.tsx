import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const LandingFeedback: FC = () => (
  <Box px={['32px', '32px', '0px']} height={838} border='1px solid blue'>
    <Layout flexGrow={1} />
    <Layout width='100%' maxWidth={1280}>
      <Column width='100%'>
        <Layout flexBasis={120} />
        <Row height='100%'>
          <Column width='100%'>
            <Box height={16} width='100%' maxWidth={580} border='1px solid black' />
            <Layout flexBasis={32} />
            <Box height={280} width='100%' maxWidth={580} border='1px solid black' />
          </Column>
          <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
          <Box border='1px solid black' width={515} height={598}>
            Form
          </Box>
        </Row>
      </Column>
    </Layout>
    <Layout flexGrow={1} />
  </Box>
)

export { LandingFeedback }
