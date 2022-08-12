import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Image }     from '@ui/image'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Box }       from '@ui/layout'

import { Content }   from './content'
import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ title, content, excerpt, image, index }) => (
  <Box height={['auto', 'auto', 444]} width='100%' flexWrap={['wrap', 'wrap', 'nowrap']}>
    <Condition match={index % 2 === 0}>
      <Row minHeight={350} display={['none', 'none', 'flex']}>
        <Image width={572} height={404} alt={title} src={image.sourceUrl} contain />
      </Row>
      <Layout flexBasis={32} flexShrink={0} />
      <Content title={title} imageUrl={image.sourceUrl} content={content} excerpt={excerpt} />
    </Condition>
    <Condition match={index % 2 !== 0}>
      <Layout flexBasis={[64, 64, 0]} />
      <Content title={title} imageUrl={image.sourceUrl} content={content} excerpt={excerpt} />
      <Layout flexBasis={32} flexShrink={0} />
      <Row minHeight={350} display={['none', 'none', 'flex']}>
        <Image width={572} height={404} alt={title} src={image.sourceUrl} contain />
      </Row>
    </Condition>
  </Box>
)

export { Item }
