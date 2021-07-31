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
  // TODO map/reorganize
  const {
    Mobile,
    Frontend,
    Backend,
    'Data science': DataScience,
    'Artificial Intelligence': AI,
    GameDev,
    Testing,
    Ops,
    'Project Management': PM,
    Analytics,
  } = useData()

  return (
    <Box>
      <Column width='100%'>
        <Box border='1px solid black' width='100%' height={30}>
          Направления работы
        </Box>
        <Layout flexBasis={48} />
        <Row>
          <Column width='100%'>
            {skills.map((skill) => (
              <Item skill={skill} />
            ))}
          </Column>
          <Layout flexBasis={32} />
          <Column width='100%' />
        </Row>
      </Column>
    </Box>
  )
}

export { LandingWorkDirections }
