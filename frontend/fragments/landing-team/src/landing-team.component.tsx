import React            from 'react'
import { FC }           from 'react'

import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Text }         from '@ui/text'

import { Item }         from './item'
import { useData }      from './data'
import { LandingProps } from './landing-team.interface'

const LandingTeam: FC<LandingProps> = ({ language }) => {
  const recruits = useData()

  return (
    <Box px={['32px', '32px', '0px']} minHeight={830} border='1px solid black'>
      <Column width='100%' justifyContent='center' alignItems='center'>
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%' justifyContent='center'>
            <Layout flexBasis={152} />
            <Row justifyContent='center' alignItems='center'>
              <Text fontWeight='slim' fontSize='massive' color='text.black'>
                Dream team
              </Text>
            </Row>
            <Layout flexBasis={74} />
            <Row>
              {recruits.map(({ title: recruit, featuredImage: image }) => (
                <Item recruit={recruit} image={image} language={language} />
              ))}
            </Row>
            <Layout flexBasis={160} />
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingTeam }
