import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const LandingIntroduction: FC = () => (
  <Box height={903} border='1px solid blue'>
    <Layout flexGrow={1} />
    <Layout width={1280}>
      <Column justifyContent='center'>
        <Box height={90} width={90} border='1px solid black'>
          Introduction text
        </Box>
      </Column>
    </Layout>
    <Layout flexGrow={1} />
  </Box>
)

export { LandingIntroduction }
