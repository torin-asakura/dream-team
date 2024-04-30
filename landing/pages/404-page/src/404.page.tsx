import { useReactiveVar } from '@apollo/client'

import React              from 'react'

import { NotFound }       from '@landing/404-fragment'
import { LandingFooter }  from '@landing/footer-fragment'
import { Navigation }     from '@landing/navigation-fragment'
import { Column }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Preloader }      from '@ui/preloader'

import { Language }       from './store'
import { languageVar }    from './store'

const Page404 = ({footerData,navigationData}) => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <Preloader>
      <Box height='100vh' backgroundColor='background.lightBeige'>
        <Column width='100%'>
          <Navigation navigationData={navigationData} language={language} languageVar={languageVar} />
          <NotFound language={language} />
          <LandingFooter footerData={footerData} language={language} />
        </Column>
      </Box>
    </Preloader>
  )
}

export { Page404 }
