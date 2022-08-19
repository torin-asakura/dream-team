import React             from 'react'
import { FC }            from 'react'

import { Button }        from '@ui/button'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'
import { messages }      from '@globals/messages'

import { NotFoundProps } from './not-found.interface'

const NotFound: FC<NotFoundProps> = ({ language }) => (
  <Box width='100%' height='100vh' backgroundColor='background.lightGray' justifyContent='center'>
    <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
    <Column width='100%' justifyContent='center' alignItems='center'>
      <Layout flexBasis={[200, 200, 275]} />
      <Row justifyContent='center'>
        <Text
          fontSize={[70, 70, '150px']}
          fontWeight='bold'
          textTransform='uppercase'
          lineHeight='big'
          color='text.lightBlue'
        >
          {messages.error404[language]}
        </Text>
      </Row>
      <Layout flexBasis={32} />
      <Row justifyContent='center' alignItems='center'>
        <Text
          textAlign='center'
          fontWeight='slim'
          fontSize={['large', 'large', 'huge']}
          lineHeight={['small', 'small', 'micro']}
          color='black'
        >
          {messages.pageNotFound[language]}
        </Text>
      </Row>
      <Layout flexBasis={[12, 12, 16]} />
      <Row justifyContent='center'>
        <Text textAlign='center' fontSize='regular' lineHeight='primary' color='text.gray'>
          {messages.thisPageDoesNotExist[language]}
        </Text>
      </Row>
      <Layout flexBasis={[189, 189, 64]} />
      <Row justifyContent='center'>
        <NextLink href='/'>
          <Button>
            <Text fontSize='semiRegular' fontWeight='medium' lineHeight='extra'>
              {messages.goBack[language]}
            </Text>
          </Button>
        </NextLink>
      </Row>
      <Layout flexBasis={[20, 20, 188]} />
    </Column>
    <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
  </Box>
)

export { NotFound }
