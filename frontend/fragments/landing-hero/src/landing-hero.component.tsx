import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'
import { useRef }        from 'react'

import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { Text }          from '@ui/text'
import { Button }        from '@ui/button'
import { Video }         from '@ui/video'
import { useVideoShape } from '@ui/video'
import { FormPopover }   from '@fragments/form-popover'

import { messages }      from './messages'
import { HeroProps }     from './landing-hero.interface'
import { useData }       from './data'

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
  // const { height: videoHeight } = useVideoShape(videoNode)

  return (
    <Box
      height={['auto', 'auto', '92vh']}
      minHeight={['92vh', '92vh', 'auto']}
      position='relative'
      overflow='hidden'
    >
      <Column width='100%' justifyContent='center'>
        <FormPopover language={language} visible={visible} setVisible={setVisible} />
        <Video
          autoPlay
          muted
          loop
          playsInline
          src={Desktop.link}
          mime={Desktop.mimeType}
          display={['none', 'none', 'flex']}
          top='50%'
        />
        <Video
          autoPlay
          muted
          loop
          playsInline
          src={[Mobile2.link, Mobile.link]}
          mime={[Mobile2.mimeType, Mobile.mimeType]}
          display={['flex', 'flex', 'none']}
          top='auto'
        />
        <Layout flexBasis={[340, 340, 0]} />
        <Box
          display={['flex', 'flex', 'none']}
          height={80}
          background='linear-gradient(180deg, rgba(23, 35, 68, 0) 0%, #172344 100%)'
        />
        <Box
          height='100%'
          py={['48px', '48px', 0]}
          width='100%'
          backgroundColor={['background.darkBlue', 'background.darkBlue', 'transparent']}
        >
          <Column width='100%' alignItems='center' justifyContent='center'>
            <Layout width='100%' maxWidth={1280}>
              <Row>
                <Column width='100%'>
                  <Layout maxWidth={500}>
                    <Column>
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
              </Row>
            </Layout>
          </Column>
        </Box>
      </Column>
    </Box>
  )
}

export { LandingHero }
