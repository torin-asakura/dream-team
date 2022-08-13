import React                      from 'react'
import { FC }                     from 'react'
import { useState }               from 'react'

import { Button }                 from '@ui/button'
import { Condition }              from '@ui/condition'
import { Input }                  from '@ui/input'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { NextLink }               from '@ui/link'
import { Space }                  from '@ui/text'
import { Text }                   from '@ui/text'

import { FormProps }              from './form.interface'
import { Type }                   from './form.interface'
import { useData }                from './data'
import { useAction }              from './data'
import { messages }               from './messages'
import { getFieldDataByLanguage } from './utils'
import { formatRequisitesField }  from './utils'

const doNothing = () => {
  // do nothing
}

const Form: FC<FormProps> = ({ language, onSuccess = doNothing, onFailure = doNothing }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [type, setType] = useState<Type>('phone')
  const [requisites, setRequisites] = useState<string>('')
  const [submitForm, data, error] = useAction()
  const forms = useData()

  const getError = (field: string) => {
    if (data && data.errors) {
      const nameToIdMap = {
        name: 11,
        email: 12,
        type: 13,
        requisites: 14,
      }

      const message = data?.errors[0]?.fieldId === nameToIdMap[field] ? data.errors[0].message : ''

      if (message === messages.required.EN) {
        return messages.required[language]
      }

      if (message === '?') {
        return messages.incorrect[language]
      }

      return message
    }

    return ''
  }

  const handleSubmit = (res) => {
    if (error) {
      onFailure()
    }
    if (res.message === 'OK') {
      if (!res.success) {
        onFailure()
        return
      }
      onSuccess()
    }
  }

  return (
    <Box
      borderRadius='normal'
      backgroundColor='white'
      width={['100%', '100%', 515]}
      height={['auto', 'auto', 598]}
      padding={['16px', '16px', '32px']}
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
            placeholder={getFieldDataByLanguage(forms, language, 'name')}
            errorText={getError('name')}
          />
        </Layout>
        <Layout flexBasis={24} />
        <Layout>
          <Input
            value={email}
            onChange={(value) => setEmail(value)}
            placeholder={getFieldDataByLanguage(forms, language, 'email')}
            errorText={getError('email')}
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
              getFieldDataByLanguage(forms, language, 'requisites'),
              type
            )}
            errorText={getError('requisites')}
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
            }).then(({ data: res }) => {
              handleSubmit(res.submitForm)
            })
          }}
        >
          {messages.send[language]}
        </Button>
        <Condition match={!(data && data.errors?.message)}>
          <Layout flexBasis={20} />
        </Condition>
        <Condition match={data && data.errors?.message}>
          <Layout flexBasis={24} />
          <Layout>{data && data.errors?.message}</Layout>
          <Layout flexBasis={32} />
        </Condition>
        <Layout>
          <Column>
            <Text
              fontSize={['micro', 'micro', 'semiMedium']}
              color='text.lightGray'
              lineHeight='medium'
              textAlign='center'
              display='inline'
            >
              {messages.formLetter[language]}
              <Space />
              <NextLink
                display='inline'
                fontSize={['micro', 'micro', 'semiMedium']}
                title={messages.privacyPolicyPage[language]}
                rel='license'
                href='/privacy-policy'
                lineHeight='medium'
                color='text.accent'
                hoverColor='hover'
                textAlign='center'
              >
                {messages.policiesPart[language]}
              </NextLink>
            </Text>
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export { Form }
