import React         from 'react'
import { FC }        from 'react'

import { Image }     from '@ui/image'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Tag }       from '@ui/tag'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface'

const filterByLanguage = (language) =>
  ({ language: lang }) =>
    lang ? lang.code === language : true

const Item: FC<ItemProps> = ({ category, language }) => (
  <Box
    width='100%'
    maxWidth={624}
    border='1px solid'
    borderColor='border.lightGray'
    borderRadius='normal'
    itemScope
    itemType='http://schema.org/Thing'
  >
    <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={[20, 20, 32]} />
      <Row>
        <Layout width={56} height={56}>
          <Image src={category?.skillAddons?.icon?.node?.mediaItemUrl} />
        </Layout>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <Layout>
          <Text fontSize='increased' color='text.black' fontWeight='slim' itemProp='name'>
            {category.name}
          </Text>
        </Layout>
      </Row>
      <Layout flexBasis={32} />
      <Row flexWrap='wrap'>
        {category.skills.nodes.filter(filterByLanguage(language)).map(({ title }) => (
          <>
            <Tag title={title} />
            <Layout flexBasis={8} flexShrink={0} />
          </>
        ))}
      </Row>
      <Layout flexBasis={[20, 20, 32]} />
    </Column>
    <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
  </Box>
)

export { Item }
