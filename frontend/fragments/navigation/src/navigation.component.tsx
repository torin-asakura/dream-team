import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { NextLink }        from '@ui/link'
import { DreamTeamIcon }   from '@ui/icons'

import { useData }         from './data'
import { NavigationProps } from './navigation.interface'
import { Language }        from './navigation.interface'

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

  return (
    <Box width='100%' px={['32px', '32px', '0px']} height='8vh' justifyContent='center'>
      <Layout width='100%' maxWidth={1280} alignItems='center'>
        <Row alignItems='center' justifyContent='space-between'>
          <Layout>
            <DreamTeamIcon width={202} height={26} />
          </Layout>
          <Row justifyContent='flex-end'>
            {mapToLinks(language === 'RU' ? RU : EN)}
            <Layout flexBasis={32} />
            <Layout>
              <Button width='100%'>Оставить заявку</Button>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Button
                colors='transparent'
                onClick={switchLanguage(language, languageVar)}
                width={44}
              >
                {language === 'RU' ? 'РУ' : 'EN'}
              </Button>
            </Layout>
          </Row>
        </Row>
      </Layout>
    </Box>
  )
}

export { Navigation }
