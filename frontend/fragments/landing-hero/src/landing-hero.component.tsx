import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'
import { Button }      from '@ui/button'
import { Video }       from '@ui/video'
import { FormPopover } from '@fragments/form-popover'

import { messages }    from './messages'
import { HeroProps }   from './landing-hero.interface'
import { useData }     from './data'

const getContentByLanguage = (object) => (
  <>
    <Layout>
      <Text
        color='text.white'
        fontSize={['massive', 'massive', 'huge']}
        fontWeight='slim'
        textAlign={['center', 'center', 'start']}
      >
        {object?.title}
      </Text>
    </Layout>
    <Layout flexBasis={32} />
    <Layout maxWidth={400}>
      <Text
        color='text.white'
        fontSize='regular'
        lineHeight='primary'
        textAlign={['center', 'center', 'start']}
      >
        {object?.content}
      </Text>
    </Layout>
  </>
)

const LandingHero: FC<HeroProps> = ({ language }) => {
  const { EN, RU, Desktop, Mobile, Mobile2 } = useData()
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Box
      height={['auto', 'auto', '92vh']}
      minHeight={['92vh', '92vh', 'auto']}
      width='100%'
      position='relative'
      overflow='hidden'
      backgroundColor='background.hero'
    >
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout flexDirection='row-reverse'>
          <FormPopover language={language} visible={visible} setVisible={setVisible} />
          <Layout>
            <Video
              autoPlay
              muted
              loop
              playsInline
              src={Desktop?.mediaItemUrl}
              mime={Desktop?.mimeType}
              display={['none', 'none', 'flex']}
              top='50%'
              left='1%'
              position='relative'
            />
          </Layout>
          <Video
            autoPlay
            muted
            loop
            playsInline
            // @ts-ignore
            src={[Mobile2?.mediaItemUrl, Mobile?.mediaItemUrl]}
            // @ts-ignore
            mime={[Mobile2?.mimeType, Mobile?.mimeType]}
            display={['flex', 'flex', 'none']}
            width={375}
            top={200}
          />
          <Layout flexBasis={[340, 340, 0]} />
          <Box display={['flex', 'flex', 'none']} height={80} />
          <Box
            height='100%'
            display='flex'
            alignItems='center'
            py={['48px', '48px', 0]}
            width='100%'
            backgroundColor={['background.hero', 'background.hero', 'transparent']}
            zIndex={2}
          >
            <Column width='100%' alignItems='center' justifyContent='center'>
              <Layout width='100%' maxWidth={1280} justifyContent='center'>
                <Column width='100%'>
                  <Layout maxWidth={500}>
                    <Column alignItems={['center', 'center', 'flex-start']}>
                      {getContentByLanguage(language === 'RU' ? RU : EN)}
                      <Layout flexBasis={32} />
                      <Layout width='100%' justifyContent={['center', 'center', 'flex-start']}>
                        <Button onClick={() => setVisible(true)}>
                          {messages.contactUs[language]}
                        </Button>
                      </Layout>
                    </Column>
                  </Layout>
                </Column>
              </Layout>
            </Column>
          </Box>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
