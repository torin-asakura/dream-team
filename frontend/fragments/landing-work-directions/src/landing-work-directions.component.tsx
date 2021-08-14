import React                          from 'react'
import { FC }                         from 'react'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Text }                       from '@ui/text'

import { messages }                   from './messages'
import { Item }                       from './item'
import { useData }                    from './data'
import { LandingWorkDirectionsProps } from './landing-work-directions.interface'

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
              <>
                <Item category={category} language={language} />
                <Layout flexBasis={32} />
              </>
            ))}
          </Column>
          <Layout flexBasis={32} />
          <Column width='100%' height={['auto', 'auto', '100%']}>
            {rightSide.map((category) => (
              <>
                <Item category={category} language={language} />
                <Layout flexBasis={32} />
              </>
            ))}
            <Layout flexBasis={32} />
          </Column>
        </Row>
      </Column>
    </Layout>
  )
}

export { LandingWorkDirections }
