import React                    from 'react'
import { FC }                   from 'react'

import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Image }                from '@ui/image'
import { Text }                 from '@ui/text'
import { CopyIcon }             from '@ui/icons'
import { Form }                 from '@ui/form'

import { useData }              from './data'
import { LandingFeedbackProps } from './landing-feedback.interface'

const LandingContacts: FC<LandingFeedbackProps> = ({ language }) => {
  const { contacts, feedbackEmail, feedbackPhone, asset, workingHours } = useData()

  return (
    <Box height='92vh' width='100%'>
      <Image url={asset.link}>
        <Box
          px={['32px', '32px', '0px']}
          height='100%'
          width='100%'
          justifyContent='center'
          backgroundColor='background.transparentBlack'
        >
          <Layout width='100%' maxWidth={1280}>
            <Column width='100%'>
              <Layout flexBasis={120} />
              <Row>
                <Layout maxWidth={580}>
                  <Column width='100%'>
                    <Row width='100%'>
                      <Text fontSize='medium' color='text.accent' fontWeight='bold'>
                        {contacts[language].title}
                      </Text>
                    </Row>
                    <Layout flexBasis={32} />
                    <Row>
                      <Text fontSize='big' color='text.white' fontWeight='slim'>
                        {contacts[language].content}
                      </Text>
                    </Row>
                    <Layout flexGrow={1} />
                    <Row alignItems='center'>
                      <Layout>
                        <Text fontSize='increased' fontWeight='slim' color='text.white'>
                          {feedbackEmail.content}
                        </Text>
                      </Layout>
                      <Layout flexBasis={16} />
                      <Box
                        width={40}
                        height={40}
                        justifyContent='center'
                        alignItems='center'
                        border='1px solid'
                        borderColor='border.transparent'
                        borderRadius='huge'
                        cursor='pointer'
                        onClick={() => navigator.clipboard.writeText(feedbackEmail.content)}
                      >
                        <CopyIcon width={15} height={18} />
                      </Box>
                    </Row>
                    <Layout flexBasis={32} />
                    <Row alignItems='center'>
                      <Layout>
                        <Text fontSize='increased' color='text.white' fontWeight='slim'>
                          {feedbackPhone.content}
                        </Text>
                      </Layout>
                      <Layout flexBasis={16} />
                      <Box
                        width={40}
                        height={40}
                        justifyContent='center'
                        alignItems='center'
                        border='1px solid'
                        borderColor='border.transparent'
                        borderRadius='huge'
                        cursor='pointer'
                        onClick={() => navigator.clipboard.writeText(feedbackPhone.content)}
                      >
                        <CopyIcon width={15} height={18} />
                      </Box>
                    </Row>
                    <Layout flexBasis={16} />
                    <Layout>
                      <Text fontSize='regular' color='text.lightGray'>
                        {workingHours[language].content}
                      </Text>
                    </Layout>
                  </Column>
                </Layout>
                <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
                <Form language={language} />
              </Row>
            </Column>
          </Layout>
        </Box>
      </Image>
    </Box>
  )
}

export { LandingContacts }
