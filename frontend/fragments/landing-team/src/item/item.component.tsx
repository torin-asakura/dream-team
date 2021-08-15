import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }    from '@ui/layout'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ recruit }) => (
  <Box height={380} width='100%'>
    <Column width='100%'>
      <Row justifyContent='center'>
        <Box border='1px solid blue' borderRadius='100%' width={280} height={280} />
      </Row>
      <Layout flexBasis={32} />
      <Row justifyContent='center'>{recruit}</Row>
      <Layout flexBasis={12} />
      <Row justifyContent='center'>IT-рекрутер</Row>
    </Column>
  </Box>
)

export { Item }
