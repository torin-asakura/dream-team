import { useTheme }            from '@emotion/react'

import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'
import { useEffect }           from 'react'

import { FormPopover }         from '@fragments/form-popover'
import { Button }              from '@ui/button'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Box }                 from '@ui/layout'
import { NextLink }            from '@ui/link'
import { Logo }                from '@ui/logo'
import { AnimateOnLoad }       from '@ui/preloader'
import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'

import { NavigationProps }     from './navigation.interface'
import { Language }            from './navigation.interface'
import { useNavigation }       from './data'
import { messages }            from './messages'

const switchLanguage = (language: Language, languageVar) => () => {
  languageVar(language === 'RU' ? 'EN' : 'RU')
}

const Navigation: FC<NavigationProps> = ({ language, languageVar }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true)
  const { scroll } = useLocomotiveScroll()
  const { shadows }: any = useTheme()
  const { navigation } = useNavigation()

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (instance) => {
        if (instance.delta.y > instance.scroll.y && isNavVisible) {
          setIsNavVisible(false)
        }

        if (instance.delta.y < instance.scroll.y && !isNavVisible) {
          setIsNavVisible(true)
        }
      })
    }
  }, [scroll, isNavVisible, setIsNavVisible])

  return (
    <AnimateOnLoad
      style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        backgroundColor: 'white',
        boxShadow: `${shadows.lightGray}`,
        zIndex: 10,
      }}
      animation={{ y: 0 }}
      initial={{ y: '-100%' }}
      transition={{ duration: 1 }}
      active={isNavVisible}
    >
      <Box width='100%' height={[72, 72, 84]} justifyContent='center'>
        <Layout flexBasis={[20, 20, 0]} />
        <FormPopover language={language} visible={visible} setVisible={setVisible} />
        <Layout width='100%' maxWidth={1280} alignItems='center'>
          <Row alignItems='center' justifyContent='space-between'>
            <Layout display={['none', 'none', 'flex']}>
              <Logo />
            </Layout>
            <Layout display={['flex', 'flex', 'none']}>
              <Logo mobile />
            </Layout>
            <Row justifyContent='flex-end' alignItems='center'>
              {navigation[language].map(({ contentAddons: { title, content } }) => (
                <>
                  <NextLink
                    color='black'
                    fontWeight='medium'
                    fontSize='semiRegular'
                    textTransform='uppercase'
                    href={content}
                    rel={title}
                    title={title}
                  >
                    {title}
                  </NextLink>
                  <Layout flexBasis={32} />
                </>
              ))}
              <Layout display={['none', 'none', 'flex']}>
                <Button width='100%' onClick={() => setVisible(true)}>
                  {messages.contactUs[language]}
                </Button>
              </Layout>
              <Layout flexBasis={16} />
              <Layout>
                <Button
                  colors='transparent'
                  onClick={switchLanguage(language, languageVar)}
                  width={44}
                >
                  {language === 'RU' ? messages.language.EN : messages.language.RU}
                </Button>
              </Layout>
            </Row>
          </Row>
        </Layout>
        <Layout flexBasis={[20, 20, 0]} />
      </Box>
    </AnimateOnLoad>
  )
}

export { Navigation }
