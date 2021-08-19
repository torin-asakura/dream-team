import React            from 'react'
import { FC }           from 'react'

import { Condition }    from '@ui/condition'
import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Link }         from '@ui/link'
import { Logo }         from '@ui/logo'
import { Text }         from '@ui/text'
import { Space }        from '@ui/text'

import { useData }      from './data'
import { LandingProps } from './landing-footer.interface'
import { messages }     from './messages'

const LandingFooter: FC<LandingProps> = ({ language }) => {
  const { workingHoursRu, workingHoursEn, feedbackPhone, feedbackEmail, by } = useData()

  return (
    <Box px={['32px', '32px', '0px']} height={['auto', 'auto', 248]}>
      <Column width='100%' justifyContent='center' alignItems='center'>
        <Layout width='100%' maxWidth={1280}>
          <Layout display={['none', 'none', 'flex']} width='100%'>
            <Row>
              <Column width='100%'>
                <Logo />
                <Layout flexBasis={60} />
                <Layout>
                  <Link
                    href='https://torinasakura.name/'
                    target='_blank'
                    rel='me'
                    title={messages.siteAuthor[language]}
                  >
                    <Text fontSize='regular' color='text.lightGray'>
                      {by.title}
                    </Text>
                    <Space />
                    <Text fontSize='regular' color='text.lightGray' fontWeight='bold'>
                      {by.content}
                    </Text>
                  </Link>
                </Layout>
              </Column>
              <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
              <Column width='100%' alignItems='flex-end'>
                <Layout>
                  <Link
                    href={`mailto:${feedbackEmail.content}`}
                    rel='contact'
                    title={messages.viaEmail[language]}
                    fontSize='large'
                    color='text.black'
                    fontWeight='slim'
                  >
                    {feedbackEmail.content}
                  </Link>
                </Layout>
                <Layout flexBasis={24} />
                <Layout>
                  <Link
                    href={`tel:${feedbackPhone.content}`}
                    rel='contact'
                    title={messages.viaPhone[language]}
                    fontSize='large'
                    color='text.black'
                    fontWeight='slim'
                  >
                    {feedbackPhone.content}
                  </Link>
                </Layout>
                <Layout flexBasis={16} />
                <Layout>
                  <Text fontSize='regular' color='text.lightGray'>
                    <Condition match={language === 'RU'}>{workingHoursRu.content}</Condition>
                    <Condition match={language === 'EN'}>{workingHoursEn.content}</Condition>
                  </Text>
                </Layout>
              </Column>
            </Row>
          </Layout>
          <Layout display={['flex', 'flex', 'none']} width='100%'>
            <Column width='100%' justifyContent='center' alignItems='center'>
              <Layout flexBasis={36} />
              <Logo />
              <Layout flexBasis={28} />
              <Layout>
                <Link
                  href={`mailto:${feedbackEmail.content}`}
                  rel='contact'
                  title={messages.viaEmail[language]}
                  fontSize='large'
                  color='text.black'
                  fontWeight='slim'
                >
                  {feedbackEmail.content}
                </Link>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Link
                  href={`tel:${feedbackPhone.content}`}
                  rel='contact'
                  title={messages.viaPhone[language]}
                  fontSize='large'
                  color='text.black'
                  fontWeight='slim'
                >
                  {feedbackPhone.content}
                </Link>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Text fontSize='regular' color='text.lightGray'>
                  <Condition match={language === 'RU'}>{workingHoursRu.content}</Condition>
                  <Condition match={language === 'EN'}>{workingHoursEn.content}</Condition>
                </Text>
              </Layout>
              <Layout flexBasis={32} />
              <Box height='1px' width='100%' backgroundColor='background.lightGray' />
              <Layout flexBasis={16} />
              <Layout>
                <Link
                  href='https://torinasakura.name/'
                  target='_blank'
                  rel='me'
                  title={messages.siteAuthor[language]}
                >
                  <Text fontSize='regular' color='text.lightGray'>
                    {by.title}
                  </Text>
                  <Space />
                  <Text fontSize='regular' color='text.lightGray' fontWeight='bold'>
                    {by.content}
                  </Text>
                </Link>
              </Layout>
              <Layout flexBasis={16} />
            </Column>
          </Layout>
        </Layout>
      </Column>
    </Box>
  )
}
export { LandingFooter }
