import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Image }     from '@ui/image'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Box }       from '@ui/layout'

import { Content }   from './content'
import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({
  contentObject: { title, content, excerpt, fragments, featuredImage },
}) => (
  <Box height={['auto', 'auto', 416]} width='100%' flexWrap={['wrap', 'wrap', 'nowrap']}>
    <Condition match={!fragments?.reverse}>
      <Row minHeight={350}>
        <Image alt={title} src={featuredImage?.node?.mediaItemUrl} contain />
      </Row>
      <Layout flexBasis={64} />
      <Content title={title} content={content} excerpt={excerpt} />
    </Condition>
    <Condition match={fragments?.reverse}>
      <Row minHeight={500} display={['flex', 'flex', 'none']}>
        <Image alt={title} src={featuredImage?.node?.mediaItemUrl} contain />
      </Row>
      <Layout flexBasis={64} />
      <Content title={title} content={content} excerpt={excerpt} />
      <Layout flexBasis={64} />
      <Row minHeight={350} display={['none', 'none', 'flex']}>
        <Image alt={title} src={featuredImage?.node?.mediaItemUrl} contain />
      </Row>
    </Condition>
  </Box>
)

export { Item }
