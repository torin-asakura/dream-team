import React         from 'react'
import { FC }        from 'react'

import { Button }    from '@ui/button'
import { Condition } from '@ui/condition'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Text }      from '@ui/text'

import { TagProps }  from './tag.interface'

const Tag: FC<TagProps> = ({ title, variant = 'primary' }) => (
  <>
    <Condition match={variant === 'primary'}>
      <Column height='auto'>
        <Layout flexBasis={8} />
        <Button colors='tag' size='medium'>
          <Text fontSize='regular' lineHeight='small'>
            {title}
          </Text>
        </Button>
      </Column>
    </Condition>
    <Condition match={variant === 'secondary'}>
      <Column height='auto'>
        <Layout flexBasis={8} />
        <Button colors='greyTag' size='medium' height={32}>
          <Text fontSize='regular' lineHeight='small'>
            {title}
          </Text>
        </Button>
      </Column>
    </Condition>
  </>
)

export { Tag }
