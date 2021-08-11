import React                          from 'react'
import { FC }                         from 'react'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Text }                       from '@ui/text'

import { Item }                       from './item'
import { useData }                    from './data'
import { LandingWorkDirectionsProps } from './landing-work-directions.interface'

const LandingWorkDirections: FC<LandingWorkDirectionsProps> = ({ language }) => {
  const { leftSide, rightSide } = useData()

  return (
    <Row flexWrap='wrap'>
      <Column width='100%'>
        <Layout>
          <Text color='text.black' fontSize='big' fontWeight='slim'>
            Направления работы
          </Text>
        </Layout>
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
    </Row>
  )
}

export { LandingWorkDirections }
