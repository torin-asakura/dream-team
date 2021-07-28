import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const Item: FC = () => (
  <Box height={276} width={405} border='1px solid blue'>
    <Layout flexBasis={24} />
    <Column>
      <Layout flexBasis={24} />
      <Box height={32} border='1px solid black'>
        Company
      </Box>
      <Layout flexBasis={4} />
      <Box height={24} border='1px solid black'>
        Name
      </Box>
      <Layout flexBasis={16} />
      <Box width='100%' height={112} border='1px solid black'>
        Feedback
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
