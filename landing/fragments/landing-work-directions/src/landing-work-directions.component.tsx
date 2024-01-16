import React                          from 'react'
import { FC }                         from 'react'

import { Condition }                  from '@ui/condition'
import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Text }                       from '@ui/text'

import { Item }                       from './item'
import { LandingWorkDirectionsProps } from './landing-work-directions.interface'
import { useData }                    from './data'
import { messages }                   from './messages'

const LandingWorkDirections: FC<LandingWorkDirectionsProps> = ({ language }) => {
  const { leftSide, rightSide } = useData()

  return (
    <Layout width='100%' flexWrap={['wrap', 'wrap', 'nowrap']}>
      <Column width='100%' height={['auto', 'auto', '100%']}>
        <Layout>
          <Text color='text.black' fontSize='big' fontWeight='slim'>
            {messages.workDirections[language]}
          </Text>
        </Layout>
        <Layout flexBasis={48} />
        <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Column width='100%' height={['auto', 'auto', '100%']}>
            {leftSide.map((category) => (
              <React.Fragment key={category.name}>
                <Item category={category} language={language} />
                <Layout flexBasis={32} />
              </React.Fragment>
            ))}
          </Column>
          <Layout flexBasis={32} flexShrink={0} />
          <Column width='100%' height={['auto', 'auto', '100%']}>
            {rightSide.map((category, index) => (
              <React.Fragment key={category.name}>
                <Item category={category} language={language} />
                <Condition match={rightSide.length - 1 !== index}>
                  <Layout flexBasis={32} />
                </Condition>
              </React.Fragment>
            ))}
            <Layout flexBasis={[0, 0, 32]} />
          </Column>
        </Row>
      </Column>
    </Layout>
  )
}

export { LandingWorkDirections }
