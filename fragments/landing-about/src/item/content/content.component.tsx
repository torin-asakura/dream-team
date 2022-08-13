import React            from 'react'
import { FC }           from 'react'

import { Image }        from '@ui/image'
import { Column }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { ContentProps } from './content.interface'

const Content: FC<ContentProps> = ({ title, excerpt, content, imageUrl }) => (
  <Row>
    <Column width='100%'>
      <Layout>
        <Text color='text.accent' fontSize='medium' fontWeight='bold' textTransform='uppercase'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis={[24, 24, 32]} />
      <Layout>
        <Text color='text.black' fontSize={['large', 'large', 'big']} fontWeight='slim'>
          {excerpt}
        </Text>
      </Layout>
      <Layout flexBasis={26} display={['flex', 'flex', 'none']} />
      <Row minHeight={220} display={['flex', 'flex', 'none']}>
        <Image width={335} height='100%' alt={title} src={imageUrl} contain />
      </Row>
      <Layout flexBasis={[26, 26, 32]} />
      <Layout>
        <Text color='text.black' fontSize='regular' lineHeight='primary'>
          {content}
        </Text>
      </Layout>
    </Column>
  </Row>
)

export { Content }
