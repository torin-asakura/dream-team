import React            from 'react'
import { FC }           from 'react'
import { useState }     from 'react'

import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Text }         from '@ui/text'
import { Row }          from '@ui/layout'
import { Button }       from '@ui/button'
import { FormPopover }  from '@fragments/form-popover'

import { ContentProps } from './content.interface'
import { messages }     from '../messages'

const Content: FC<ContentProps> = ({ title, content, language }) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Layout maxWidth={[335, 335, 520]} style={{ zIndex: 1 }} flexBasis={[500, 500, 600]}>
      <FormPopover language={language} visible={visible} setVisible={setVisible} />
      <Column justifyContent='center'>
        <Layout>
          <Text
            color='text.white'
            fontSize={['massive', 'massive', 'huge']}
            fontWeight='slim'
            textAlign={['center', 'center', 'start']}
          >
            {title}
          </Text>
        </Layout>
        <Layout flexBasis={32} />
        <Layout maxWidth={400}>
          <Text
            color='text.white'
            fontSize='regular'
            lineHeight='primary'
            textAlign={['center', 'center', 'start']}
          >
            {content}
          </Text>
        </Layout>
        <Layout flexBasis={32} />
        <Row justifyContent={['center', 'center', 'flex-start']}>
          <Button onClick={() => setVisible(true)}>{messages.contactUs[language]}</Button>
        </Row>
      </Column>
    </Layout>
  )
}

export { Content }
