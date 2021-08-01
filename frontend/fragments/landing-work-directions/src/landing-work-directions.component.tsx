import React                          from 'react'
import { FC }                         from 'react'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Box }                        from '@ui/layout'

import { Item }                       from './item'
import { useData }                    from './data'
import { LandingWorkDirectionsProps } from './landing-work-directions.interface'

const LandingWorkDirections: FC<LandingWorkDirectionsProps> = ({ language }) => {
  const { leftSide, rightSide } = useData()

  return (
    <Box>
      <Column width='100%'>
        <Box border='1px solid black' width='100%' height={30}>
          Направления работы
        </Box>
        <Layout flexBasis={48} />
        <Row>
          <Column width='100%'>
            {leftSide.map((category) => (
              <>
                <Item category={category} />
                <Layout flexBasis={32} />
              </>
            ))}
          </Column>
          <Layout flexBasis={32} />
          <Column width='100%'>
            {rightSide.map((category) => (
              <>
                <Item category={category} />
                <Layout flexBasis={32} />
              </>
            ))}
            <Layout flexBasis={32} />
          </Column>
        </Row>
      </Column>
    </Box>
  )
}

export { LandingWorkDirections }
