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
  <Box height={['auto', 'auto', 444]} width='100%' flexWrap={['wrap', 'wrap', 'nowrap']}>
    <Condition match={!fragments?.reverse}>
      <Row minHeight={350} display={['none', 'none', 'flex']}>
        <Image
          width={572}
          height={404}
          alt={title}
          src={featuredImage?.node?.mediaItemUrl}
          contain
        />
      </Row>
      <Layout flexBasis={32} flexShrink={0} />
      <Content
        title={title}
        imageUrl={featuredImage?.node?.mediaItemUrl}
        content={content}
        excerpt={excerpt}
      />
    </Condition>
    <Condition match={fragments?.reverse}>
      <Layout flexBasis={[64, 64, 0]} />
      <Content
        title={title}
        imageUrl={featuredImage?.node?.mediaItemUrl}
        content={content}
        excerpt={excerpt}
      />
      <Layout flexBasis={32} flexShrink={0} />
      <Row minHeight={350} display={['none', 'none', 'flex']}>
        <Image
          width={572}
          height={404}
          alt={title}
          src={featuredImage?.node?.mediaItemUrl}
          contain
        />
      </Row>
    </Condition>
  </Box>
)

export { Item }
