import React            from 'react'
import { FC }           from 'react'

import { Condition }    from '@ui/condition'
import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Box }          from '@ui/layout'

import { useData }      from './data'
import { LandingProps } from './landing-footer.interface'

const LandingFooter: FC<LandingProps> = ({ language }) => {
  const { workingHoursRu, workingHoursEn, feedbackPhone, feedbackEmail, by } = useData()

  return (
    <Box px={['32px', '32px', '0px']} height={248} border='1px solid blue'>
      <Column width='100%' justifyContent='center' alignItems='center'>
        <Layout width='100%' maxWidth={1280}>
          <Row>
            <Column width='100%'>
              <Box border='1px solid black' width='100%' maxWidth={233} height={30} />
              <Layout flexBasis={60} />
              <Box border='1px solid black' width='100%' maxWidth={126} height={24}>
                {by.title} {by.content}
              </Box>
            </Column>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Column width='100%' alignItems='flex-end'>
              <Box border='1px solid black' width='100%' maxWidth={243} height={32}>
                {feedbackEmail.content}
              </Box>
              <Layout flexBasis={24} />
              <Box border='1px solid black' width='100%' maxWidth={219} height={32}>
                {feedbackPhone.content}
              </Box>
              <Layout flexBasis={8} />
              <Box border='1px solid black' width='100%' maxWidth={233} height={24}>
                <Condition match={language === 'RU'}>{workingHoursRu.content}</Condition>
                <Condition match={language === 'EN'}>{workingHoursEn.content}</Condition>
              </Box>
            </Column>
          </Row>
        </Layout>
      </Column>
    </Box>
  )
}
export { LandingFooter }
