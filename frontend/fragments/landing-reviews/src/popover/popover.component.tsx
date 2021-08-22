import React              from 'react'
import { FC }             from 'react'

import { Layer }          from '@ui/layer'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text'
import { ArrowLeftIcon }  from '@ui/icons'
import { ArrowRightIcon } from '@ui/icons'

import { PopoverProps }   from './popover.interface'
import { messages }       from '../messages'

const Popover: FC<PopoverProps> = ({ visible, setVisible, reviews, language }) => (
  <Layer visible={visible !== null} onClose={() => setVisible(null)} opacity='small'>
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
                {visible !== null && reviews[visible].title}
              </Text>
            </Layout>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='text.lightGray' fontSize='regular'>
                {visible !== null && reviews[visible].review.respondent}
              </Text>
            </Layout>
          </Column>
        </Row>
        <Layout flexBasis={32} />
        <Text fontSize='regular' color='text.black'>
          {visible !== null && reviews[visible].content}
        </Text>
        <Layout flexGrow={1} />
        <Row justifyContent='space-between'>
          <Box
            // @ts-ignore
            cursor='pointer'
            onClick={() => {
              if (visible && visible !== 0) setVisible(visible - 1)
            }}
          >
            <ArrowLeftIcon width={8} height={16} color={visible === 0 ? '#D5DBE2' : '#000000'} />
          </Box>
          <Text fontSize='regular' fontWeight='medium'>
            {messages.review[language]}
            <Space />
            {visible && visible + 1}
            <Space />
            {messages.of[language]}
            <Space />
            {reviews.length}
          </Text>
          <Box
            // @ts-ignore
            cursor='pointer'
            onClick={() => {
              if (visible && visible !== reviews.length - 1) setVisible(visible + 1)
            }}
          >
            <ArrowRightIcon
              width={8}
              height={16}
              color={visible === reviews.length - 1 ? '#D5DBE2' : '#000000'}
            />
          </Box>
        </Row>
      </Column>
    </Box>
  </Layer>
)

export { Popover }
