import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'
import { Image }     from '@ui/image'

import { messages }  from './messages'
import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ recruit, image, language }) => (
  <Box height={380} width='100%'>
    <Column width='100%'>
      <Row justifyContent='center'>
        <Box borderRadius='100%' width={280} height={280} overflow='hidden'>
          <Image alt={image.node.title} src={image.node.link} />
        </Box>
      </Row>
      <Layout flexBasis={32} />
      <Row justifyContent='center'>
        <Text fontSize='large' color='text.black' fontWeight='slim'>
          {recruit}
        </Text>
      </Row>
      <Layout flexBasis={12} />
      <Row justifyContent='center'>
        <Text color='text.lightGray' fontSize='regular'>
          {messages.itRecruiter[language]}
        </Text>
      </Row>
    </Column>
  </Box>
)

export { Item }
