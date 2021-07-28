import React                     from 'react'
import { FC }                    from 'react'

import { Layout }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { LandingWorkDirections } from '@fragments/landing-work-directions'

import { Item }                  from './item.component'

const LandingAbout: FC = () => (
  <Box border='1px solid black'>
    <Layout flexGrow={1} />
    <Layout width={1280}>
      <Column width='100%'>
        {[...Array(2)].map((item, index) => (
          <>
            <Layout flexBasis={160} />
            <Item reverse={index % 2 === 0} />
          </>
        ))}
        <Layout flexBasis={160} />
        <LandingWorkDirections />
        {[...Array(2)].map((item, index) => (
          <>
            <Item reverse={index % 2 === 0} />
            <Layout flexBasis={160} />
          </>
        ))}
      </Column>
    </Layout>
    <Layout flexGrow={1} />
  </Box>
)

export { LandingAbout }
