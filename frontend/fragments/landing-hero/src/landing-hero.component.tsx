import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const LandingHero: FC = () => (
  <Box px={['32px', '32px', '0px']} height={903} border='1px solid blue'>
    <Column width='100%' alignItems='center' justifyContent='center'>
      <Layout width='100%' maxWidth={1280}>
        <Row>
          <Column width='100%' alignItems='flex-start'>
            <Box height={90} width={90} border='1px solid black'>
              Introduction text
            </Box>
          </Column>
        </Row>
      </Layout>
    </Column>
  </Box>
)

export { LandingHero }
