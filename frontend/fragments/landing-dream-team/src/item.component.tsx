import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'

const Item: FC = () => (
  <Box height={380} width={406} border='1px solid blue'>
    FED
  </Box>
)

export { Item }
