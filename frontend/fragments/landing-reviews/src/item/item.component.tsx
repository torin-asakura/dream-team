import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ review }) => (
  <Box width={405} border='1px solid blue'>
    <Layout flexBasis={24} />
    <Column>
      <Layout flexBasis={24} />
      <Box height={32} border='1px solid black'>
        {review.title}
      </Box>
      <Layout flexBasis={4} />
      <Box height={24} border='1px solid black'>
        {review.review.respondent}
      </Box>
      <Layout flexBasis={16} />
      <Box width='100%' border='1px solid black'>
        {review.content}
      </Box>
      <Layout flexBasis={16} />
      <Box height={24} border='1px solid black'>
        + Подробнее
      </Box>
      <Layout flexBasis={24} />
    </Column>
    <Layout flexBasis={24} />
  </Box>
)

export { Item }
