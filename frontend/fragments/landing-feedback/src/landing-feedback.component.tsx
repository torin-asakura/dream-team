import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'

import { Button }               from '@ui/button'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { NextLink }             from '@ui/link'
import { Input }                from '@ui/input'
import { Image }                from '@ui/image'
import { Text }                 from '@ui/text'

import { messages }             from './messages'
import { useData }              from './data'
import { useAction }            from './data'
import { Language }             from './landing-feedback.interface'
import { Type }                 from './landing-feedback.interface'
import { LandingFeedbackProps } from './landing-feedback.interface'

const fieldToLabelMap = {
  name: ['Name', 'Имя'],
  email: ['E-mail'],
  requisites: ['Phone|Telegram|Skype', 'Телефон|Telegram|Skype'],
}

const getFieldDataByLanguage = (content, language: Language, field: string): string =>
  content.forms[language].filter(({ label }) => fieldToLabelMap[field].includes(label))[0]?.label

const formatRequisitesField = (batch, state) =>
  batch &&
  batch.split('|').filter((label) =>
    ({
      phone: ['Phone', 'Телефон'],
      telegram: ['Telegram'],
      skype: ['Skype'],
    }[state].includes(label))
  )[0]

const LandingFeedback: FC<LandingFeedbackProps> = ({ language }) => {
  const { asset, ...content } = useData()
  const [submitForm, data] = useAction()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [type, setType] = useState<Type>('phone')
  const [requisites, setRequisites] = useState<string>('')

  return (
    <Image url={asset.link}>
      <Box
        px={['32px', '32px', '0px']}
        height={838}
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
              <Box
                borderRadius='normal'
                backgroundColor='white'
                width={515}
                height={598}
                padding='32px'
              >
                <Column width='100%'>
                  <Layout>
                    <Text fontSize='increased' fontWeight='slim' color='text.black'>
                      {messages.getInTouch[language]}
                    </Text>
                  </Layout>
                  <Layout flexBasis={32} />
                  <Layout>
                    <Input
                      value={name}
                      onChange={(value) => setName(value)}
                      placeholder={getFieldDataByLanguage(content, language, 'name')}
                    />
                  </Layout>
                  <Layout flexBasis={24} />
                  <Layout>
                    <Input
                      value={email}
                      onChange={(value) => setEmail(value)}
                      placeholder={getFieldDataByLanguage(content, language, 'email')}
                    />
                  </Layout>
                  <Layout flexBasis={24} />
                  <Box
                    backgroundColor='background.lightGray'
                    height={52}
                    width='100%'
                    borderRadius='huge'
                    alignItems='center'
                    padding='4px'
                  >
                    <Button
                      width='100%'
                      colors='tertiary'
                      active={type === 'phone'}
                      onClick={() => setType('phone')}
                    >
                      {messages.phone[language]}
                    </Button>
                    <Button
                      width='100%'
                      colors='tertiary'
                      active={type === 'telegram'}
                      onClick={() => setType('telegram')}
                    >
                      Telegram
                    </Button>
                    <Button
                      width='100%'
                      colors='tertiary'
                      active={type === 'skype'}
                      onClick={() => setType('skype')}
                    >
                      Skype
                    </Button>
                  </Box>
                  <Layout flexBasis={24} />
                  <Layout>
                    <Input
                      value={requisites}
                      onChange={(value) => setRequisites(value)}
                      placeholder={formatRequisitesField(
                        getFieldDataByLanguage(content, language, 'requisites'),
                        type
                      )}
                    />
                  </Layout>
                  <Layout flexBasis={32} />
                  <Button
                    width='100%'
                    onClick={() => {
                      submitForm({
                        variables: {
                          name,
                          email,
                          type,
                          requisites,
                        },
                      })
                    }}
                  >
                    {messages.send[language]}
                  </Button>
                  <Layout flexBasis={24} />
                  <Layout>{data && data.errors?.message}</Layout>
                  <Layout flexBasis={32} />
                  <Layout>
                    <Column>
                      <Text fontSize='semiMedium' color='text.lightGray' textAlign='center'>
                        {messages.formLetter[language]}
                      </Text>
                      <NextLink
                        fontSize='semiMedium'
                        href='/privacy-policy'
                        color='text.accent'
                        textAlign='center'
                      >
                        {messages.policiesPart[language]}
                      </NextLink>
                    </Column>
                  </Layout>
                </Column>
              </Box>
            </Row>
          </Column>
        </Layout>
      </Box>
    </Image>
  )
}

export { LandingFeedback }
