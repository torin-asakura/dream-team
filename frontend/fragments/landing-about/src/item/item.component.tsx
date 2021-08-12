import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Box }       from '@ui/layout'
import { Condition } from '@ui/condition'
import { Image }     from '@ui/image'

import { Content }   from './content'
import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({
  contentObject: { title, content, excerpt, fragments, featuredImage },
}) => (
  <Box height={416}>
    <Condition match={!fragments?.reverse}>
      <Row>
        <Image url={featuredImage?.node?.link} actualSize />
      </Row>
      <Layout flexBasis={64} />
      <Content title={title} content={content} excerpt={excerpt} />
    </Condition>
    <Condition match={fragments?.reverse}>
      <Content title={title} content={content} excerpt={excerpt} />
      <Layout flexBasis={64} />
      <Row>
        <Image url={featuredImage?.node?.link} actualSize />
      </Row>
    </Condition>
  </Box>
)

export { Item }
