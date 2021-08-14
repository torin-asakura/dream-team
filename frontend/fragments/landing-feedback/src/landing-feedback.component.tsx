import React                    from 'react'
import { FC }                   from 'react'

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

  return (
    <Image url={asset.link}>
      <Box
        px={['20px', '20px', '0px']}
        py={['48px', '48px', '120px']}
        height={['auto', 'auto', 838]}
        width='100%'
        justifyContent='center'
        backgroundColor='background.transparentBlue'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%'>
            <Row flexWrap='wrap' justifyContent='space-between'>
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
              <Column>
                <Layout flexBasis={[32, 32, 0]} />
                <Form language={language} />
              </Column>
            </Row>
          </Column>
        </Layout>
      </Box>
    </Image>
  )
}

export { LandingFeedback }
