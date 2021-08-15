import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'
import { motion }               from 'framer-motion'
import { useAnimation }         from 'framer-motion'

import { Button }               from '@ui/button'
import { Condition }            from '@ui/condition'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Image }                from '@ui/image'
import { Text }                 from '@ui/text'
import { CopyIcon }             from '@ui/icons'
import { Form }                 from '@ui/form'

import { useData }              from './data'
import { messages }             from './messages'
import { LandingContactsProps } from './landing-contacts.interface'

const LandingContacts: FC<LandingContactsProps> = ({ language }) => {
  const { contacts, feedbackEmail, feedbackPhone, asset, workingHours } = useData()
  const [email, setEmail] = useState<boolean>(false)
  const [phone, setPhone] = useState<boolean>(false)

  const copy = (content) => {
    if (navigator && navigator.clipboard) navigator.clipboard.writeText(content)
    else {
      const input = document.createElement('input')
      input.setAttribute('type', 'text')
      input.style.position = 'absolute'
      input.style.left = '-100%'
      input.setAttribute('value', content)
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
  }

  const Copied = ({ target, setTarget }) => {
    const main = useAnimation()

    main
      .start({
        opacity: 1,
      })
      .then(() => {
        setTimeout(() => {
          main
            .start({
              opacity: 0,
            })
            .then(() => {
              setTarget(false)
            })
        }, 1000)
      })

    return (
      <Condition match={target}>
        <motion.div initial={{ opacity: 0 }} animate={main}>
          <Box
            px='10px'
            py='6px'
            backgroundColor='background.transparentBlack'
            borderRadius='small'
          >
            <Text fontSize='semiMedium' color='text.white'>
              {messages.copied[language]}
            </Text>
          </Box>
        </motion.div>
      </Condition>
    )
  }

  return (
    <Box
      height={['auto', 'auto', '92vh']}
      width='100%'
      position='relative'
      overflow='hidden'
      backgroundColor='background.transparentBlue'
    >
      <Image alt='Contact us' src={asset.link} background />
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
                      <Column>
                        <Layout flexBasis={[48, 48, 0]} />
                        <Layout>
                          <Text
                            fontSize='increased'
                            fontWeight='slim'
                            color='text.white'
                            id='emailContent'
                          >
                            {feedbackEmail.content}
                          </Text>
                        </Layout>
                      </Column>
                      <Layout flexBasis={16} />
                      <Layout display={['none', 'none', 'flex']}>
                        <Box width={40} height={40}>
                          <Button
                            width='100%'
                            colors='clipboard'
                            onClick={() => {
                              copy(feedbackEmail.content)
                              setEmail(true)
                            }}
                          >
                            <Layout>
                              <CopyIcon width={15} height={18} />
                            </Layout>
                          </Button>
                        </Box>
                      </Layout>
                      <Layout flexBasis={10} />
                      <Copied target={email} setTarget={setEmail} />
                    </Row>
                    <Layout flexBasis={32} />
                    <Row alignItems='center'>
                      <Layout>
                        <Text fontSize='increased' color='text.white' fontWeight='slim'>
                          {feedbackPhone.content}
                        </Text>
                      </Layout>
                      <Layout flexBasis={16} />
                      <Layout display={['none', 'none', 'flex']}>
                        <Box width={40} height={40}>
                          <Button
                            width='100%'
                            colors='clipboard'
                            onClick={() => {
                              copy(feedbackPhone.content)
                              setPhone(true)
                            }}
                          >
                            <Layout>
                              <CopyIcon width={15} height={18} />
                            </Layout>
                          </Button>
                        </Box>
                      </Layout>
                      <Layout flexBasis={10} />
                      <Copied target={phone} setTarget={setPhone} />
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
