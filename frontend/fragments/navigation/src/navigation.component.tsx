import React               from 'react'
import { FC }              from 'react'

import { Button } from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { NextLink } from '@ui/link'
import { Condition }       from '@ui/condition'
import { DreamTeamIcon }   from '@ui/icons'

import { useData }         from './data'
import { NavigationProps } from './navigation.interface'
import { Language }        from './navigation.interface'

const switchLanguage = (language: Language, languageVar) => () => {
  languageVar(language === 'RU' ? 'EN' : 'RU')
}

const mapToLinks = (links: any[]): FC => () =>
  <>
    {links?.map(({label, url}) => (
      <>
        <NextLink
          color='black'
          fontWeight='medium'
          fontSize='semiRegular'
          href={url}
        >
          {label.toUpperCase()}
        </NextLink>
        <Layout flexBasis={32}/>
      </>
    ))}
  </>

const Navigation: FC<NavigationProps> = ({ language, languageVar }) => {
  const [EN, RU] = useData()

  return (
    <Box px={['32px', '32px', '0px']} height={84} justifyContent='center'>
      <Layout width='100%' maxWidth={1280} alignItems='center'>
        <Row alignItems='center'>
            <Layout>
              <DreamTeamIcon width={202} height={26} />
            </Layout>
          <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
            {mapToLinks(language === 'RU' ? RU : EN)}
          <Layout flexBasis={32}/>
            <Layout>
              <Button width='100%'>
                Оставить заявку
              </Button>
            </Layout>
            <Layout flexBasis={16} />
            <Box
              border='1px solid'
              borderColor='border.lightGray'
              borderRadius='huge'
              width={44}
              height={44}
              justifyContent='center'
              alignItems='center'
            >
              <Button colors='transparent' onClick={switchLanguage(language, languageVar)} width='100%'>
                {language === 'RU' ? 'РУ' : 'EN'}
              </Button>
            </Box>
        </Row>
      </Layout>
    </Box>
  )
}

export { Navigation }
