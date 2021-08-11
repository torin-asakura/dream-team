import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Condition } from '@ui/condition'

import { Content }   from './content'
import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ contentObject: { title, content, excerpt, fragments } }) => (
  <Row>
    <Condition match={!fragments?.reverse}>
      <Layout width='100%'>Image</Layout>
      <Layout flexBasis={32} />
      <Content title={title} content={content} excerpt={excerpt} />
    </Condition>
    <Condition match={fragments?.reverse}>
      <Content title={title} content={content} excerpt={excerpt} />
      <Layout flexBasis={32} />
      <Layout width='100%'>Image</Layout>
    </Condition>
  </Row>
)

export { Item }
