import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const Item: FC = () => (
  <Box height={248} width='100%' maxWidth={624} border='1px solid blue'>
    <Layout flexBasis={32} />
    <Column>
      <Layout flexBasis={32} />
      <Row>
        <Box border='1px solid black' width={56} height={56}>
          Icon
        </Box>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <Box height={40} border='1px solid black' width='100%'>
          Desc
        </Box>
      </Row>
      <Layout flexBasis={32} />
      <Row>
        <Box height={40} border='1px solid black' width='100%'>
          Skills
        </Box>
      </Row>
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={32} />
  </Box>
)

export { Item }
