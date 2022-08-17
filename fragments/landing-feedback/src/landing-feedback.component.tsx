import React                    from 'react'
import { FC }                   from 'react'

import { Form }                 from '@ui/form'
import { Image }                from '@ui/image'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Text }                 from '@ui/text'
import { extractObject }        from '@globals/data'

import { LandingFeedbackProps } from './landing-feedback.interface'

const LandingFeedback: FC<LandingFeedbackProps> = ({ language, data }) => {
  const obj = extractObject('contentAddons', 'lead', data[language])

  const imageUrl = obj.image.sourceUrl
  const imageAltText = obj.image.altText
  const { title } = obj
  const { content } = obj

  return (
    <Box
      py={['48px', '48px', '120px']}
      height={['auto', 'auto', 838]}
      width='100%'
      justifyContent='center'
      backgroundColor='background.transparentBlue'
      position='relative'
    >
      <Box position='absolute' width='100%' height='100%' left={0} top={0} zIndex={-1}>
        <Image alt={imageAltText} src={imageUrl} layout='fill' />
      </Box>
      <Layout width='100%' maxWidth={1280}>
        <Column width='100%'>
          <Row flexWrap='wrap' justifyContent='space-between'>
            <Layout maxWidth={580}>
              <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
              <Column width='100%'>
                <Row width='100%'>
                  <Text fontSize='medium' color='text.accent' fontWeight='bold'>
                    {title}
                  </Text>
                </Row>
                <Layout flexBasis={32} />
                <Row>
                  <Text
                    fontSize={['large', 'large', 'big']}
                    lineHeight={['small', 'extra', 'extra']}
                    color='text.white'
                    fontWeight='slim'
                  >
                    {content}
                  </Text>
                </Row>
              </Column>
              <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
            </Layout>
            <Column
              width={['100%', '100%', 'auto']}
              height='auto'
              justifyContent='center'
              alignItems='center'
            >
              <Layout flexBasis={[32, 32, 0]} />
              <Row>
                <Layout flexBasis={[20, 20, 0]} />
                <Form language={language} />
                <Layout flexBasis={[20, 20, 0]} />
              </Row>
            </Column>
          </Row>
        </Column>
      </Layout>
    </Box>
  )
}

export { LandingFeedback }
