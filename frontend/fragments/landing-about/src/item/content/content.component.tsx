import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'

import { ContentProps } from './content.interface'

const Content: FC<ContentProps> = ({ title, excerpt, content }) => (
  <Box width='100%' border='1px solid blue'>
    <Column width='100%'>
      <Box height={16} width='100%'>
        {title}
      </Box>
      <Layout flexBasis={32} />
      <Box width='100%'>{excerpt}</Box>
      <Layout flexBasis={32} />
      <Box width='100%'>{content}</Box>
    </Column>
  </Box>
)

export { Content }
