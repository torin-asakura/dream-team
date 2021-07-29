import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

const Navigation: FC = () => (
  <Box px={['32px', '32px', '0px']} border='1px solid black' height={84}>
    <Layout flexGrow={1} />
    <Layout width='100%' maxWidth={1280}>
      <Row>
        <Box width={202} height='100%' border='1px solid black'>
          Logo
        </Box>
        <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
        <Box width={212} height='100%' border='1px solid black'>
          Panel
        </Box>
      </Row>
    </Layout>
    <Layout flexGrow={1} />
  </Box>
)

export { Navigation }
