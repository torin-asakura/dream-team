import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'
import { Button }    from '@ui/button'
import { Video }     from '@ui/video'

import { messages }  from './messages'
import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'

const getContentByLanguage = (object) => (
  <>
    <Layout>
      <Text color='text.white' fontSize='huge' fontWeight='slim'>
        {object?.title}
      </Text>
    </Layout>
    <Layout flexBasis={32} />
    <Layout maxWidth={400}>
      <Text color='text.white' fontSize='regular'>
        {object?.content}
      </Text>
    </Layout>
  </>
)

const LandingHero: FC<HeroProps> = ({ language }) => {
  const { EN, RU, Desktop, Mobile } = useData()

  return (
    <Box px={['32px', '32px', '0px']} height='92vh' position='relative' overflow='hidden'>
      <Video autoPlay muted loop src={Desktop.link} display={['none', 'none', 'flex']} />
      <Video autoPlay muted loop src={Mobile.link} display={['flex', 'flex', 'none']} />
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout width='100%' maxWidth={1280}>
          <Row>
            <Column width='100%' alignItems='flex-start'>
              <Layout maxWidth={500}>
                <Column>
                  {getContentByLanguage(language === 'RU' ? RU : EN)}
                  <Layout flexBasis={32} />
                  <Layout>
                    <Button
                      onClick={() => {
                        window.scroll({
                          top: 6800,
                          behavior: 'smooth',
                        })
                      }}
                    >
                      {messages.contactUs[language]}
                    </Button>
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
