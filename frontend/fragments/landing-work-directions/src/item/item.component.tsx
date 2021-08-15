import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ category }) => (
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
          {category.name}
        </Box>
      </Row>
      <Layout flexBasis={32} />
      <Row>
        <Box border='1px solid black' width='100%' flexWrap='wrap'>
          {category.skills.nodes.map(({ title }) => (
            <Box px='12px' py='8px'>
              {title}
            </Box>
          ))}
        </Box>
      </Row>
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={32} />
  </Box>
)

export { Item }
