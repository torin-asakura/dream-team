import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { ItemProps } from './item.interface'
import { Category }  from './category'

const Item: FC<ItemProps> = ({ skill }) => (
  <Box width='100%' maxWidth={624} border='1px solid blue'>
    <Layout flexBasis={32} />
    <Column>
      <Layout flexBasis={32} />
      <Row>
        <Box border='1px solid black' width={56} height={56}>
          Icon
        </Box>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <Box height={40} border='1px solid black' width='100%'>
          {skill.title}
        </Box>
      </Row>
      <Layout flexBasis={32} />
      <Row>
        <Box border='1px solid black' width='100%'>
          {skill.categories.map((category) => (
            <Category>{category}</Category>
          ))}
        </Box>
      </Row>
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={32} />
  </Box>
)

export { Item }
