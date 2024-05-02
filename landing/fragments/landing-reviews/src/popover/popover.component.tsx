import React              from 'react'
import { FC }             from 'react'
import { useMemo }        from 'react'

import { ArrowLeftIcon }  from '@ui/icons'
import { ArrowRightIcon } from '@ui/icons'
import { Layer }          from '@ui/layer'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Tag }            from '@ui/tag/src'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text'

import { PopoverProps }   from './popover.interface'
import { formatString }   from '../helpers'
import { messages }       from '../messages'

const Popover: FC<PopoverProps> = ({ visible, setVisible, reviews, language }) => {
  const contentWithoutTags = useMemo(
    () => reviews.map((node) => formatString(node.content)),
    [reviews]
  )

  return (
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
            <Column width='100%'>
              <Row>
                <Layout>
                  <Text fontSize='large' color='text.black' fontWeight='slim' whiteSpace='nowrap'>
                    {visible !== null && reviews[visible].title}
                  </Text>
                </Layout>
                <Row justifyContent='flex-end' display={['none', 'none', 'flex']}>
                  {visible !== null &&
                    reviews[visible].review.skills?.map(({ title }) => (
                      <>
                        <Layout flexBasis={8} />
                        <Tag title={title} variant='secondary' />
                      </>
                    ))}
                </Row>
              </Row>
              <Layout flexBasis={4} />
              <Layout>
                <Text color='text.lightGray' fontSize='regular'>
                  {visible !== null && reviews[visible].review.respondent}
                </Text>
              </Layout>
              <Layout flexBasis={[24, 24, 0]} />
              <Row justifyContent='flex-start' flexWrap='wrap' display={['flex', 'flex', 'none']}>
                {visible !== null &&
                  reviews[visible].review.skills?.map(({ title }) => (
                    <>
                      <Column height='auto'>
                        <Layout flexBasis={[0, 0, 8]} />
                        <Tag title={title} variant='secondary' />
                        <Layout flexBasis={[8, 8, 0]} />
                      </Column>
                      <Layout flexBasis={[8, 8, 0]} />
                    </>
                  ))}
              </Row>
            </Column>
          </Row>
          <Layout flexBasis={[24, 24, 32]} />
          <Text fontSize='regular' color='text.black' lineHeight='primary'>
            {visible !== null && contentWithoutTags[visible]}
          </Text>
          <Layout flexGrow={1} />
          <Row justifyContent='space-between'>
            <Box
              // @ts-ignore
              cursor='pointer'
              onClick={() => {
                if (visible !== null && visible !== 0) setVisible(visible - 1)
              }}
            >
              <ArrowLeftIcon width={8} height={16} color={visible === 0 ? '#D5DBE2' : '#000000'} />
            </Box>
            <Text fontSize='regular' fontWeight='medium'>
              {messages.review[language]}
              <Space />
              {visible !== null && visible + 1}
              <Space />
              {messages.of[language]}
              <Space />
              {reviews.length}
            </Text>
            <Box
              // @ts-ignore
              cursor='pointer'
              onClick={() => {
                if (visible !== null && visible !== reviews.length - 1) setVisible(visible + 1)
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
}

export { Popover }
