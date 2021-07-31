import React   from 'react'
import { FC }  from 'react'

import { Box } from '@ui/layout'

const Category: FC = ({ children }) => (
  <Box px={12} py={8}>
    {children}
  </Box>
)

export { Category }
