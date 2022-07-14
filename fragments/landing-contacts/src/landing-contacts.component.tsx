import React                    from 'react'
import { FC }                   from 'react'

import { Copy }                 from '@ui/copy'
import { Form }                 from '@ui/form'
import { Image }                from '@ui/image'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Link }                 from '@ui/link'
import { Text }                 from '@ui/text'

import { LandingContactsProps } from './landing-contacts.interface'
import { useData }              from './data'
import { messages }             from './messages'

const LandingContacts: FC<LandingContactsProps> = ({ language }) => {
  const { contacts, feedbackEmail, feedbackPhone, asset, workingHours } = useData()

  return (
    <Box
      height={['auto', 'auto', '92vh']}
      width='100%'
      position='relative'
      overflow='hidden'
      backgroundColor='background.transparentBlue'
      itemScope
      itemType='http://schema.org/Organization'
    >
      <Box position='absolute' width='100%' height='100%' left={0} top={0} zIndex={-1}>
        <Image alt={contacts[language].title} src={asset.mediaItemUrl} width={1920} height={838} />
      </Box>
      <Box
        px={['20px', '20px', '0px']}
        py={['48px', '48px', '120px']}
        height={['auto', 'auto', '100%']}
        width='100%'
        justifyContent='center'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%' justifyContent='center'>
            <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
              <Layout maxWidth={580}>
                <Column width='100%'>
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
                  <Layout flexBasis={32} />
                  <Row>
                    <Text fontSize='big' color='text.white' fontWeight='slim'>
                      {contacts[language].content}
                    </Text>
                  </Row>
                  <Layout flexGrow={1} />
                  <Row alignItems='center'>
                    <Column>
                      <Layout flexBasis={[48, 48, 0]} />
                      <Layout>
                        <Link
                          href={`mailto:${feedbackEmail.content}`}
                          title={messages.viaEmail[language]}
                          rel='contact'
                          fontSize='increased'
                          fontWeight='slim'
                          color='text.white'
                          id='emailContent'
                          itemProp='email'
                        >
                          {feedbackEmail.content}
                        </Link>
                      </Layout>
                    </Column>
                    <Layout flexBasis={16} />
                    <Layout display={['none', 'none', 'flex']}>
                      <Box width={40} height={40}>
                        <Copy content={feedbackEmail.content} />
                      </Box>
                    </Layout>
                  </Row>
                  <Layout flexBasis={32} />
                  <Row alignItems='center'>
                    <Layout>
                      <Link
                        href={`tel:${feedbackPhone.content}`}
                        rel='contact'
                        title={messages.viaPhone[language]}
                        fontSize='increased'
                        color='text.white'
                        fontWeight='slim'
                        itemProp='telephone'
                      >
                        {feedbackPhone.content}
                      </Link>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Layout display={['none', 'none', 'flex']}>
                      <Copy content={feedbackPhone.content} />
                    </Layout>
                  </Row>
                  <Layout flexBasis={16} />
                  <Layout>
                    <Column height='auto'>
                      <Layout>
                        <Text fontSize='regular' color='text.lightGray'>
                          {workingHours[language].content}
                        </Text>
                      </Layout>
                      <Layout flexBasis={[48, 48, 0]} />
                    </Column>
                  </Layout>
                </Column>
              </Layout>
              <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
              <Form language={language} />
            </Row>
          </Column>
        </Layout>
      </Box>
    </Box>
  )
}

export { LandingContacts }
