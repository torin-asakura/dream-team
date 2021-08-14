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
  <Box height={['auto', 'auto', 416]} width='100%' flexWrap={['wrap', 'wrap', 'nowrap']}>
    <Condition match={!fragments?.reverse}>
      <Row minHeight={350}>
        <Image url={featuredImage?.node?.link} backgroundSize={['contain', 'contain', 'auto']} />
      </Row>
      <Layout flexBasis={64} />
      <Content title={title} content={content} excerpt={excerpt} />
    </Condition>
    <Condition match={fragments?.reverse}>
      <Row minHeight={500} display={['flex', 'flex', 'none']}>
        <Image url={featuredImage?.node?.link} backgroundSize={['contain', 'contain', 'auto']} />
      </Row>
      <Layout flexBasis={64} />
      <Content title={title} content={content} excerpt={excerpt} />
      <Layout flexBasis={64} />
      <Row display={['none', 'none', 'flex']}>
        <Image url={featuredImage?.node?.link} backgroundSize='auto' />
      </Row>
    </Condition>
  </Box>
)

export { Item }
