import React                   from 'react'
import { FC }                  from 'react'

import { Condition }           from '@ui/condition'
import { Divider }             from '@ui/divider'
import { DreamTeamIcon }       from '@ui/icons'
import { DreamTeamMobileIcon } from '@ui/icons'
import { Image }               from '@ui/image'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Link }                from '@ui/link'
import { SocialLinks }         from '@ui/social-links'
import { Text }                from '@ui/text'
import { Space }               from '@ui/text'
import { useSphere }           from '@ui/logo'

import { LandingProps }        from './landing-footer.interface'
import { useData }             from './data'
import { messages }            from './messages'

const LandingFooter: FC<LandingProps> = ({ language }) => {
  const sphere = useSphere()
  const { workingHoursRu, workingHoursEn, feedbackPhone, feedbackEmail, by } = useData()

  return (
    <Box itemScope itemType='http://schema.org/Organization'>
      <Column width='100%' justifyContent='center' alignItems='center'>
        <Layout flexBasis={[0, 0, 64]} />
        <Layout width='100%' maxWidth={1280}>
          <Layout display={['none', 'none', 'flex']} width='100%'>
            <Row>
              <Column width='100%'>
                <Row alignItems='center' width={280} height={56}>
                  <Layout width={[44, 44, 62]} height={[44, 44, 62]}>
                    <Image src={sphere?.sourceUrl} alt={sphere?.altText} contain />
                  </Layout>
                  <Layout flexBasis={10} />
                  <Layout>
                    <DreamTeamIcon width={191} height={24} />
                  </Layout>
                </Row>
                <Layout flexBasis={24} />
                <Row alignItems='center'>
                  <SocialLinks language={language} />
                </Row>
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
                    itemProp='email'
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
                    itemProp='telephone'
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
              <Row alignItems='center' width={159} height={56}>
                <Layout width={62} height={62}>
                  <Image src={sphere?.sourceUrl} alt={sphere?.altText} contain />
                </Layout>
                <Layout flexBasis={10} />
                <Layout width={77} height={42}>
                  <DreamTeamMobileIcon width={77} height={42} />
                </Layout>
              </Row>
              <Layout flexBasis={28} />
              <Row justifyContent='center' alignItems='center'>
                <SocialLinks language={language} />
              </Row>
              <Layout flexBasis={32} />
              <Layout>
                <Link
                  href={`mailto:${feedbackEmail.content}`}
                  rel='contact'
                  title={messages.viaEmail[language]}
                  fontSize='large'
                  color='text.black'
                  fontWeight='slim'
                  itemProp='email'
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
                  itemProp='telephone'
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
        <Layout flexBasis={[0, 0, 64]} />
        <Layout width='100%'>
          <Divider backgroundColor='border.lightGray' />
        </Layout>
        <Column width='100%' maxWidth={1280} height='auto' display={['none', 'none', 'flex']}>
          <Layout flexBasis={20} />
          <Layout width='100%' justifyContent='flex-end'>
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
          <Layout flexBasis={20} />
        </Column>
      </Column>
    </Box>
  )
}
export { LandingFooter }
