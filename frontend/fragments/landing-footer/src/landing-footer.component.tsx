import React             from 'react'
import { FC }            from 'react'

import { Condition }     from '@ui/condition'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { DreamTeamIcon } from '@ui/icons'
import { Text }          from '@ui/text'
import { Space }         from '@ui/text'

import { useData }       from './data'
import { LandingProps }  from './landing-footer.interface'

const LandingFooter: FC<LandingProps> = ({ language }) => {
  const { workingHoursRu, workingHoursEn, feedbackPhone, feedbackEmail, by } = useData()

  return (
    <Box px={['32px', '32px', '0px']} height={248}>
      <Column width='100%' justifyContent='center' alignItems='center'>
        <Layout width='100%' maxWidth={1280}>
          <Row>
            <Column width='100%'>
              <Layout>
                <DreamTeamIcon width={233} height={30} />
              </Layout>
              <Layout flexBasis={60} />
              <Layout>
                <Text fontSize='regular' color='text.lightGray'>
                  {by.title}
                </Text>
                <Space />
                <Text fontSize='regular' color='text.lightGray' fontWeight='bold'>
                  {by.content}
                </Text>
              </Layout>
            </Column>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Column width='100%' alignItems='flex-end'>
              <Layout>
                <Text fontSize='large' color='text.black' fontWeight='slim'>
                  {feedbackEmail.content}
                </Text>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Text fontSize='large' color='text.black' fontWeight='slim'>
                  {feedbackPhone.content}
                </Text>
              </Layout>
              <Layout flexBasis={16} />
              <Layout>
                <Text fontSize='regular' color='text.lightGray'>
                  <Condition match={language === 'RU'}>{workingHoursRu.content}</Condition>
                  <Condition match={language === 'EN'}>{workingHoursEn.content}</Condition>
                </Text>
              </Layout>
            </Column>
          </Row>
        </Layout>
      </Column>
    </Box>
  )
}
export { LandingFooter }
