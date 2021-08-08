import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text } from '@ui/text'
import { Button } from '@ui/button'

import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'

const getContentByLanguage = (object) => (
  <>
    <Layout>
      <Text color='black' fontSize='huge'>
        {object?.title}
      </Text>
    </Layout>
    <Layout flexBasis={32} />
    <Layout maxWidth={400}>
      <Text color='black' fontSize='regular'>
        {object?.content}
      </Text>
    </Layout>
  </>
)

const LandingHero: FC<HeroProps> = ({ language }) => {
  const [EN, RU] = useData()

  return (
    <Box px={['32px', '32px', '0px']} height={903}>
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout width='100%' maxWidth={1280}>
          <Row>
            <Column width='100%' alignItems='flex-start'>
              <Layout maxWidth={500}>
                <Column>
                  {getContentByLanguage(language === 'RU' ? RU : EN)}
                  <Layout flexBasis={32} />
                  <Layout>
                    <Button>Оставить заявку</Button>
                  </Layout>
                </Column>
              </Layout>
            </Column>
          </Row>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
