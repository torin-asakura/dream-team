import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

import { Item }   from './item.component'

const LandingWorkDirections: FC = () => (
  <Box>
    <Column width='100%'>
      <Box border='1px solid black' width='100%' height={30}>
        Направления работы
      </Box>
      <Layout flexBasis={48} />
      <Row>
        <Column width='100%'>
          {[...Array(3)].map(() => (
            <>
              <Item />
              <Layout flexBasis={32} />
            </>
          ))}
        </Column>
        <Layout flexBasis={32} />
        <Column width='100%'>
          {[...Array(3)].map(() => (
            <>
              <Item />
              <Layout flexBasis={32} />
            </>
          ))}
        </Column>
      </Row>
    </Column>
  </Box>
)

export { LandingWorkDirections }
