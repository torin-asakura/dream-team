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
    <Box height='92vh' width='100%'>
      <Image url={asset.link}>
        <Box
          px={['32px', '32px', '0px']}
          height='100%'
          width='100%'
          justifyContent='center'
          backgroundColor='background.transparentBlue'
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
                      <Box width={40} height={40}>
                        <Button
                          width='100%'
                          colors='clipboard'
                          onClick={() => {
                            navigator.clipboard.writeText(feedbackEmail.content)
                            setEmail(true)
                          }}
                        >
                          <Layout>
                            <CopyIcon width={15} height={18} />
                          </Layout>
                        </Button>
                      </Box>
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
                      <Box width={40} height={40}>
                        <Button
                          width='100%'
                          colors='clipboard'
                          onClick={() => {
                            navigator.clipboard.writeText(feedbackPhone.content)
                            setPhone(true)
                          }}
                        >
                          <Layout>
                            <CopyIcon width={15} height={18} />
                          </Layout>
                        </Button>
                      </Box>
                      <Layout flexBasis={10} />
                      <Copied target={phone} setTarget={setPhone} />
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
