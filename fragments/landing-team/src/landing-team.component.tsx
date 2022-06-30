import React            from 'react'
import { FC }           from 'react'

import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Text }         from '@ui/text'

import { Item }         from './item'
import { LandingProps } from './landing-team.interface'
import { useData }      from './data'

const LandingTeam: FC<LandingProps> = ({ language }) => {
  const recruits = useData()

  const filterByLanguage = ({ language: { code } }) => code === language

  return (
    <Box px={['50px', '50px', '0px']} height={['auto', 'auto', 830]}>
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
            <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
              {recruits.filter(filterByLanguage).map(({ title: recruit, featuredImage: image }) => (
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
