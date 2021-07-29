import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Condition } from '@ui/condition'

const Item: FC<{ reverse: boolean }> = ({ reverse }) => (
  <Box height={444} border='1px solid black'>
    <Condition match={!reverse}>
      <Box width='100%' border='1px solid red'>
        Image
      </Box>
      <Layout flexBasis={32} />
      <Box width='100%' border='1px solid blue'>
        Text
      </Box>
    </Condition>
    <Condition match={reverse}>
      <Box width='100%' border='1px solid blue'>
        Text
      </Box>
      <Layout flexBasis={32} />
      <Box width='100%' border='1px solid red'>
        Image
      </Box>
    </Condition>
  </Box>
)

export { Item }
