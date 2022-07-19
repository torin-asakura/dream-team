import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { FormPopover }     from '@fragments/form-popover'
import { Button }          from '@ui/button'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Logo }            from '@ui/logo'
import { AnimateOnLoad }   from '@ui/preloader'

import { NavigationProps } from './navigation.interface'
import { Language }        from './navigation.interface'
import { messages }        from './messages'

const switchLanguage = (language: Language, languageVar) => () => {
  languageVar(language === 'RU' ? 'EN' : 'RU')
}

const Navigation: FC<NavigationProps> = ({ language, languageVar }) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <AnimateOnLoad
      style={{
        width: '100%',
        height: 84,
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        backgroundColor: 'white',
        zIndex: 10,
      }}
      animation={{ y: 0 }}
      initial={{ y: '-100%' }}
      transition={{ duration: 1 }}
    >
      <Layout flexBasis={[20, 20, 0]} />
      <FormPopover language={language} visible={visible} setVisible={setVisible} />
      <Layout width='100%' maxWidth={1280} alignItems='center'>
        <Row alignItems='center' justifyContent='space-between'>
          <Logo />
          <Row justifyContent='flex-end' alignItems='center'>
            <NextLink
              color='black'
              fontWeight='medium'
              fontSize='semiRegular'
              textTransform='uppercase'
              href='/contacts'
              rel='contact'
              title={messages.contactsPage[language]}
            >
              {messages.contacts[language]}
            </NextLink>
            <Layout flexBasis={32} />
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
    </AnimateOnLoad>
  )
}

export { Navigation }
