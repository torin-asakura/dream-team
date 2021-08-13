import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { NextLink }        from '@ui/link'
import { DreamTeamIcon }   from '@ui/icons'
import { FormPopover }     from '@fragments/form-popover'

import { useData }         from './data'
import { NavigationProps } from './navigation.interface'
import { Language }        from './navigation.interface'
import { messages }        from './messages'

const switchLanguage = (language: Language, languageVar) => () => {
  languageVar(language === 'RU' ? 'EN' : 'RU')
}

const mapToLinks =
  (links: any[]): FC =>
  () =>
    (
      <>
        {links?.map(({ label, url }) => (
          <>
            <NextLink
              color='black'
              fontWeight='medium'
              fontSize='semiRegular'
              textTransform='uppercase'
              href={url}
            >
              {label}
            </NextLink>
            <Layout flexBasis={32} />
          </>
        ))}
      </>
    )

const Navigation: FC<NavigationProps> = ({ language, languageVar }) => {
  const [EN, RU] = useData()
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Box
      width='100%'
      height='8vh'
      justifyContent='center'
      position='sticky'
      top={0}
      backgroundColor='white'
      zIndex={10}
    >
      <FormPopover language={language} visible={visible} setVisible={setVisible} />
      <Layout width='100%' maxWidth={1280} alignItems='center'>
        <Row alignItems='center' justifyContent='space-between'>
          <NextLink href='/'>
            <Layout>
              <DreamTeamIcon width={202} height={26} />
            </Layout>
          </NextLink>
          <Row justifyContent='flex-end'>
            {mapToLinks(language === 'RU' ? RU : EN)}
            <Layout flexBasis={32} />
            <Layout>
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
                {messages.language[language]}
              </Button>
            </Layout>
          </Row>
        </Row>
      </Layout>
    </Box>
  )
}

export { Navigation }
