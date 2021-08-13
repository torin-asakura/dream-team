import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Layer }            from '@ui/layer'
import { Form }             from '@ui/form'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { SuccessIcon }      from '@ui/icons'
import { FailureIcon }      from '@ui/icons'
import { Text }             from '@ui/text'
import { Button }           from '@ui/button'

import { messages }         from './messages'
import { FormPopoverProps } from './form-popover.interface'

const FormPopover: FC<FormPopoverProps> = ({ language, visible, setVisible }) => {
  const [success, setSuccess] = useState<boolean>(false)
  const [failure, setFailure] = useState<boolean>(false)

  return (
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} opacity='small'>
        <Form
          language={language}
          onSuccess={() => setSuccess(true)}
          onFailure={() => setFailure(true)}
        />
      </Layer>
      <Layer visible={success} onClose={() => setSuccess(false)} opacity='small'>
        <Box width={640} borderRadius='normal' backgroundColor='white' padding='32px'>
          <Column width='100%'>
            <Row justifyContent='center'>
              <SuccessIcon width={120} height={120} />
            </Row>
            <Layout flexBasis={32} />
            <Row justifyContent='center'>
              <Text color='text.black' fontWeight='slim' fontSize='increased' textAlign='center'>
                {messages.applicationSent[language]}
              </Text>
            </Row>
            <Layout flexBasis={16} />
            <Row justifyContent='center'>
              <Text color='text.black' fontSize='regular' textAlign='center'>
                {messages.weWillCallBack[language]}
              </Text>
            </Row>
            <Layout flexBasis={32} />
            <Button colors='secondary' onClick={() => setSuccess(false)}>
              {messages.continue[language]}
            </Button>
          </Column>
        </Box>
      </Layer>
      <Layer visible={failure} onClose={() => setFailure(false)} opacity='small'>
        <Box width={640} borderRadius='normal' backgroundColor='white' padding='32px'>
          <Column width='100%'>
            <Row justifyContent='center'>
              <FailureIcon width={120} height={120} />
            </Row>
            <Layout flexBasis={32} />
            <Row justifyContent='center'>
              <Text color='text.black' fontWeight='slim' fontSize='increased' textAlign='center'>
                {messages.wentWrong[language]}
              </Text>
            </Row>
            <Layout flexBasis={16} />
            <Row justifyContent='center'>
              <Text color='text.black' fontSize='regular' textAlign='center'>
                {messages.tryAgainLater[language]}
              </Text>
            </Row>
            <Layout flexBasis={32} />
            <Button colors='secondary' onClick={() => setFailure(false)}>
              {messages.continue[language]}
            </Button>
          </Column>
        </Box>
      </Layer>
    </>
  )
}

export { FormPopover }
