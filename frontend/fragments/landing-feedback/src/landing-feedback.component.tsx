import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'

import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Image }                from '@ui/image'
import { Text }                 from '@ui/text'
import { Form }                 from '@ui/form'

import { useData }              from './data'
import { LandingFeedbackProps } from './landing-feedback.interface'

const LandingFeedback: FC<LandingFeedbackProps> = ({ language }) => {
  const { asset, ...content } = useData()
  const [success, setSuccess] = useState<boolean>(false)
  const [failure, setFailure] = useState<boolean>(false)

  return (
    <Image url={asset.link}>
      <Box
        px={['32px', '32px', '0px']}
        height={['auto', 'auto', 838]}
        width='100%'
        justifyContent='center'
        backgroundColor='background.transparentBlue'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%'>
            <Layout flexBasis={120} />
            <Row flexWrap='wrap'>
              <Layout maxWidth={580}>
                <Column width='100%'>
                  <Row width='100%'>
                    <Text fontSize='medium' color='text.accent' fontWeight='bold'>
                      {content[language].title}
                    </Text>
                  </Row>
                  <Layout flexBasis={32} />
                  <Row>
                    <Text fontSize='big' color='text.white' fontWeight='slim'>
                      {content[language].content}
                    </Text>
                  </Row>
                </Column>
              </Layout>
              <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
              <Form
                language={language}
                onSuccess={() => setSuccess(true)}
                onFailure={() => setSuccess(true)}
              />
            </Row>
          </Column>
        </Layout>
      </Box>
    </Image>
  )
}

export { LandingFeedback }
