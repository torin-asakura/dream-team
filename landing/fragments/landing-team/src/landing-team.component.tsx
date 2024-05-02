import React            from 'react'
import { FC }           from 'react'

import { Condition }   from '@ui/condition'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import { Item }         from './item'
import { LandingProps } from './landing-team.interface'
import {removeParagraphTags} from '@ui/utils'

const LandingTeam: FC<LandingProps> = ({recruitsData, language }) => {

  const recruitsWithoutTags = recruitsData.recruits.nodes.map((node) => removeParagraphTags(node))

  const filterByLanguage = ({ language: { code } }) => code === language

  return (
    <Box px={['50px', '50px', '0px']} height={['auto', 'auto', 830]}>
      <Column width='100%' justifyContent='center' alignItems='center'>
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%' justifyContent='center'>
            <Layout flexBasis={[64, 64, 152]} />
            <Row justifyContent='center' alignItems='center'>
              <Text
                fontWeight='slim'
                fontSize={['increased', 'increased', 'massive']}
                color='text.black'
              >
                Dream team
              </Text>
            </Row>
            <Layout flexBasis={[32, 32, 74]} />
            <Layout
              flexDirection={['column', 'column', 'row']}
              flexWrap={['wrap', 'wrap', 'nowrap']}
            >
              {recruitsWithoutTags.filter(filterByLanguage).map((
                { title: recruit, featuredImage: image },
                index
              ) => (
                <React.Fragment key={recruit}>
                  <Item recruit={recruit} image={image} language={language} />
                  <Condition match={recruitsWithoutTags.filter(filterByLanguage).length - 1 !== index}>
                    <Layout flexBasis={32} flexShrink={0} />
                  </Condition>
                </React.Fragment>
              ))}
            </Layout>
            <Layout flexBasis={[60, 60, 160]} />
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingTeam }
