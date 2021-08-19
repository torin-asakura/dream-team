import React            from 'react'
import { FC }           from 'react'
import { useState }     from 'react'

import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Box }          from '@ui/layout'
import { Layer }        from '@ui/layer'
import { Text }         from '@ui/text'
import { TextEllipsis } from '@ui/text'

import { messages }     from './messages'
import { ItemProps }    from './item.interface'

const Item: FC<ItemProps> = ({ review, language }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} opacity='small'>
        <Box
          width={['100%', '100%', 960]}
          height={649}
          borderRadius='normal'
          backgroundColor='white'
          padding='32px'
        >
          <Column>
            <Row alignItems='center'>
              <Column>
                <Layout>
                  <Text fontSize='large' color='text.black' fontWeight='slim'>
                    {review.title}
                  </Text>
                </Layout>
                <Layout flexBasis={4} />
                <Layout>
                  <Text color='text.lightGray' fontSize='regular'>
                    {review.review.respondent}
                  </Text>
                </Layout>
              </Column>
            </Row>
            <Layout flexBasis={32} />
            <Text fontSize='regular' color='text.black'>
              {review.content}
            </Text>
          </Column>
        </Box>
      </Layer>
      <Box
        width={405}
        height={276}
        backgroundColor='white'
        borderRadius='normal'
        overflow='hidden'
        padding='24px'
        // @ts-ignore
        cursor='pointer'
        onClick={() => setVisible(true)}
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
    </>
  )
}
export { Item }
