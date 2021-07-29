import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const LandingFeedback: FC = () => (
  <Box height={838} border='1px solid blue'>
    <Layout flexGrow={1} />
    <Layout width={1280}>
      <Column width='100%'>
        <Layout flexBasis={120} />
        <Row height='100%'>
          <Column>
            <Box height={16} width={580} border='1px solid black' />
            <Layout flexBasis={32} />
            <Box height={280} width={580} border='1px solid black' />
          </Column>
          <Layout flexGrow={1} />
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
