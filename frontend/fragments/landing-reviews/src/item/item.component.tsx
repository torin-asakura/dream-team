import React            from 'react'
import { FC }           from 'react'

import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Text }         from '@ui/text'
import { TextEllipsis } from '@ui/text'

import { messages }     from './messages'
import { ItemProps }    from './item.interface'

const Item: FC<ItemProps> = ({ review, language, onClick }) => (
  <Box
    width={405}
    height={276}
    backgroundColor='white'
    borderRadius='normal'
    overflow='hidden'
    padding='24px'
    // @ts-ignore
    cursor='pointer'
    onClick={onClick}
  >
    <Column>
      <Layout>
        <Text fontWeight='slim' fontSize='large' color='text.black'>
          {review.title}
        </Text>
      </Layout>
      <Layout flexBasis={4} />
      <Layout>
        <Text fontSize='regular' color='text.lightGray'>
          {review.review.respondent}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout overflow='hidden'>
        <TextEllipsis fontSize='regular' color='text.gray' lineClamp={6}>
          {review.content}
        </TextEllipsis>
      </Layout>
      <Layout flexGrow={1} />
      <Layout>
        <Text color='text.accent' fontSize='regular'>
          + {messages.details[language]}
        </Text>
      </Layout>
    </Column>
  </Box>
)
export { Item }
