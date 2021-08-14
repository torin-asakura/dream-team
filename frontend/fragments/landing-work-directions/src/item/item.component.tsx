import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'
import { Image }     from '@ui/image'

import { ItemProps } from './item.interface'

const filterByLanguage =
  (language) =>
  ({ language: lang }) =>
    lang ? lang.code === language : true

const Item: FC<ItemProps> = ({ category, language }) => (
  <Box
    width='100%'
    maxWidth={624}
    border='1px solid'
    borderColor='border.lightGray'
    borderRadius='normal'
  >
    <Layout flexBasis={32} />
    <Column width='100%'>
      <Layout flexBasis={32} />
      <Row>
        <Layout width={56} height={56}>
          <Image url={category.skillAddons.ikonka.link} />
        </Layout>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <Layout>
          <Text fontSize='increased' color='text.black' fontWeight='slim'>
            {category.name}
          </Text>
        </Layout>
      </Row>
      <Layout flexBasis={32} />
      <Row>
        <Layout width='100%' flexWrap='wrap'>
          {category.skills.nodes.filter(filterByLanguage(language)).map(({ title }) => (
            <>
              <Layout>
                <Column>
                  <Layout flexBasis={8} />
                  <Box
                    px='12px'
                    py='8px'
                    border='1px solid'
                    borderColor='border.lightGray'
                    borderRadius='normal'
                  >
                    <Text color='text.black' fontSize='regular' whiteSpace='nowrap'>
                      {title}
                    </Text>
                  </Box>
                </Column>
              </Layout>
              <Layout flexBasis={8} />
            </>
          ))}
        </Layout>
      </Row>
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={32} />
  </Box>
)

export { Item }
