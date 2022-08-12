import React        from 'react'
import { FC }       from 'react'

import { Button }   from '@ui/button'
import { Layout }   from '@ui/layout'
import { Column }   from '@ui/layout'
import { Text }     from '@ui/text'

import { TagProps } from './tag.interface'

const Tag: FC<TagProps> = ({ title }) => (
  <Column>
    <Layout flexBasis={8} />
    <Button colors='tag' size='medium'>
      <Text fontSize='regular' lineHeight='small'>
        {title}
      </Text>
    </Button>
  </Column>
)

export { Tag }
