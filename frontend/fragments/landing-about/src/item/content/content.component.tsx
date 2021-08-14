import React            from 'react'
import { FC }           from 'react'

import { Column }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { ContentProps } from './content.interface'

const Content: FC<ContentProps> = ({ title, excerpt, content }) => (
  <Row>
    <Column width='100%'>
      <Layout>
        <Text color='text.accent' fontSize='medium' fontWeight='bold' textTransform='uppercase'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Layout>
        <Text color='text.black' fontSize='big' fontWeight='slim'>
          {excerpt}
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Layout>
        <Text color='text.black' fontSize='regular' lineHeight='primary'>
          {content}
        </Text>
      </Layout>
    </Column>
  </Row>
)

export { Content }
