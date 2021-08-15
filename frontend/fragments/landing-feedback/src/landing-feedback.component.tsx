import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'

import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'

import { useData }              from './data'
import { useAction }            from './data'
import { Language }             from './landing-feedback.interface'
import { Type }                 from './landing-feedback.interface'
import { LandingFeedbackProps } from './landing-feedback.interface'

const getContentByLanguage = (content, language: Language) =>
  language === 'RU' ? content.RU : content.EN

const LandingFeedback: FC<LandingFeedbackProps> = ({ language }) => {
  const content = useData()
  const [submitForm, data] = useAction()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [type, setType] = useState<Type>('phone')
  const [requisites, setRequisites] = useState<string>('')

  return (
    <Box px={['32px', '32px', '0px']} height={838} border='1px solid blue'>
      <Layout flexGrow={1} />
      <Layout width='100%' maxWidth={1280}>
        <Column width='100%'>
          <Layout flexBasis={120} />
          <Row height='100%'>
            <Column width='100%'>
              <Box height={16} width='100%' maxWidth={580} border='1px solid black'>
                {getContentByLanguage(content, language).title}
              </Box>
              <Layout flexBasis={32} />
              <Box height={280} width='100%' maxWidth={580} border='1px solid black'>
                {getContentByLanguage(content, language).content}
              </Box>
            </Column>
            <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            <Box border='1px solid black' width={515} height={598} padding='32px'>
              <Column width='100%'>
                <Layout>Введите данные</Layout>
                <Layout flexBasis={32} />
                <Layout>
                  <input value={name} onChange={(event) => setName(event.target.value)} />
                </Layout>
                <Layout flexBasis={24} />
                <Layout>
                  <input value={email} onChange={(event) => setEmail(event.target.value)} />
                </Layout>
                <Layout flexBasis={24} />
                <Layout>
                  <input type='radio' name='type' onChange={() => setType('phone')} />
                  <input type='radio' name='type' onChange={() => setType('telegram')} />
                  <input type='radio' name='type' onChange={() => setType('skype')} />
                </Layout>
                <Layout flexBasis={24} />
                <Layout>
                  <input
                    value={requisites}
                    onChange={(event) => setRequisites(event.target.value)}
                  />
                </Layout>
                <Layout flexBasis={32} />
                <button
                  type='button'
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
                  Отправить
                </button>
                <Layout flexBasis={24} />
                <Layout>{data && data.errors?.message}</Layout>
                <Layout flexBasis={32} />
                <Layout>Disc</Layout>
              </Column>
            </Box>
          </Row>
        </Column>
      </Layout>
      <Layout flexGrow={1} />
    </Box>
  )
}

export { LandingFeedback }
