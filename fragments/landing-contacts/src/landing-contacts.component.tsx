import { useTheme }             from '@emotion/react'

import React                    from 'react'
import { FC }                   from 'react'

import { Button }               from '@ui/button'
import { Copy }                 from '@ui/copy'
import { Divider }              from '@ui/divider'
import { Form }                 from '@ui/form'
import { WhatsappIcon }         from '@ui/icons'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Link }                 from '@ui/link'
import { AnimateOnLoad }        from '@ui/preloader'
import { SocialLinks }          from '@ui/social-links'
import { Text }                 from '@ui/text'
import { useHover }             from '@ui/utils'

import { LandingContactsProps } from './landing-contacts.interface'
import { useData }              from './data'
import { messages }             from './messages'

const LandingContacts: FC<LandingContactsProps> = ({ language }) => {
  const { contacts, feedbackEmail, feedbackPhone, workingHours, whatsapp } = useData()
  const theme: any = useTheme()
  const [hover, hoverProps] = useHover()

  return (
    <Box
      height={['auto', 'auto', '100vh']}
      width='100%'
      position='relative'
      backgroundColor='background.lightGray'
      itemScope
      itemType='http://schema.org/Organization'
    >
      <Box
        height={['auto', 'auto', '100%']}
        width='100%'
        alignItems={['center', 'center', 'flex-start']}
        justifyContent='center'
      >
        <Layout flexBasis={[20, 20, 320]} flexShrink={[0, 0, 1]} />
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%' justifyContent='center'>
            <Layout flexBasis={[120, 120, 164]} flexShrink={0} />
            <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
              <Layout maxWidth={624}>
                <Column width='100%'>
                  <AnimateOnLoad
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 1 }}
                    animation={{ y: 0, opacity: 1 }}
                  >
                    <Row>
                      <Text
                        fontSize='medium'
                        color='text.accent'
                        fontWeight='bold'
                        textTransform='uppercase'
                      >
                        {contacts[language].title}
                      </Text>
                    </Row>
                  </AnimateOnLoad>
                  <Layout flexBasis={[16, 16, 32]} />
                  <AnimateOnLoad
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 1 }}
                    animation={{ y: 0, opacity: 1 }}
                    delay={300}
                  >
                    <Row>
                      <Text fontSize='big' color='text.black' fontWeight='slim'>
                        {contacts[language].content}
                      </Text>
                    </Row>
                  </AnimateOnLoad>
                  <Layout flexBasis={[0, 0, 320]} flexGrow={1} />
                  <AnimateOnLoad
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 1 }}
                    animation={{ y: 0, opacity: 1 }}
                    delay={600}
                  >
                    <Row alignItems='flex-end'>
                      <Column>
                        <Layout flexBasis={[48, 48, 0]} />
                        <Layout>
                          <Link
                            href={`mailto:${feedbackEmail.content}`}
                            title={messages.viaEmail[language]}
                            rel='contact'
                            fontSize={['semiLarge', 'semiLarge', 'increased']}
                            fontWeight='slim'
                            color='text.black'
                            id='emailContent'
                            itemProp='email'
                          >
                            {feedbackEmail.content}
                          </Link>
                        </Layout>
                      </Column>
                      <Layout flexBasis={16} />
                      <Layout>
                        <Copy content={feedbackEmail.content} />
                      </Layout>
                    </Row>
                  </AnimateOnLoad>
                  <Layout flexBasis={32} />
                  <AnimateOnLoad
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 1 }}
                    animation={{ y: 0, opacity: 1 }}
                    delay={900}
                  >
                    <Row alignItems='center'>
                      <Layout>
                        <Link
                          href={`tel:${feedbackPhone.content}`}
                          rel='contact'
                          title={messages.viaPhone[language]}
                          fontSize={['semiLarge', 'semiLarge', 'increased']}
                          color='text.black'
                          fontWeight='slim'
                          itemProp='telephone'
                        >
                          {feedbackPhone.content}
                        </Link>
                      </Layout>
                      <Layout flexBasis={16} />
                      <Layout>
                        <Link href={whatsapp.content} target='_blank'>
                          <Box width={[36, 36, 40]} height={[36, 36, 40]} {...hoverProps}>
                            <Button
                              width='100%'
                              colors='clipboard'
                              // @ts-ignore
                              px={0}
                              height='100%'
                            >
                              <Layout alignItems='center'>
                                <WhatsappIcon
                                  color={
                                    hover
                                      ? `${theme.colors.text.accent}`
                                      : `${theme.colors.text.black}`
                                  }
                                  width={18}
                                  height={18}
                                />
                              </Layout>
                            </Button>
                          </Box>
                        </Link>
                      </Layout>
                      <Layout flexBasis={16} />
                      <Layout>
                        <Copy content={feedbackPhone.content} />
                      </Layout>
                    </Row>
                  </AnimateOnLoad>
                  <Layout flexBasis={[8, 8, 12]} />
                  <Layout>
                    <Column width='100%' height='auto'>
                      <AnimateOnLoad
                        initial={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 1 }}
                        animation={{ y: 0, opacity: 1 }}
                        delay={1200}
                      >
                        <Layout>
                          <Text fontSize='regular' color='text.lightGray'>
                            {workingHours[language].content}
                          </Text>
                        </Layout>
                      </AnimateOnLoad>
                      <Layout flexBasis={[24, 24, 32]} />
                      <Layout>
                        <Divider backgroundColor='border.lightGray' />
                      </Layout>
                      <Layout flexBasis={[24, 24, 32]} />
                      <AnimateOnLoad
                        initial={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 1 }}
                        animation={{ y: 0, opacity: 1 }}
                        delay={1200}
                      >
                        <Row justifyContent='flex-start'>
                          <SocialLinks contacts language={language} />
                        </Row>
                      </AnimateOnLoad>
                      <Layout flexBasis={[48, 48, 0]} />
                    </Column>
                  </Layout>
                </Column>
              </Layout>
              <Layout flexGrow={[0, 0, 1]} flexBasis={[64, 64, 0]} />
              <AnimateOnLoad
                initial={{ opacity: 0, y: '100%' }}
                transition={{ duration: 1 }}
                animation={{ y: 0, opacity: 1 }}
                delay={600}
              >
                <Form language={language} />
              </AnimateOnLoad>
            </Row>
            <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
          </Column>
        </Layout>
        <Layout flexBasis={[20, 20, 320]} flexShrink={[0, 0, 1]} />
      </Box>
    </Box>
  )
}

export { LandingContacts }
