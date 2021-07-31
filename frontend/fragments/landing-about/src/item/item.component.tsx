import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Condition } from '@ui/condition'

import { Content }   from './content'
import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ contentObject: { title, content, excerpt, fragments } }) => (
  <Box height={444} border='1px solid black'>
    <Condition match={!fragments?.reverse}>
      <Box width='100%' border='1px solid red'>
        Image
      </Box>
      <Layout flexBasis={32} />
      <Content title={title} content={content} excerpt={excerpt} />
    </Condition>
    <Condition match={fragments?.reverse}>
      <Content title={title} content={content} excerpt={excerpt} />
      <Layout flexBasis={32} />
      <Box width='100%' border='1px solid red'>
        Image
      </Box>
    </Condition>
  </Box>
)

export { Item }
