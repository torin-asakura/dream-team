import { useReactiveVar } from '@apollo/client'

import React              from 'react'

import { LandingFooter }  from '@fragments/landing-footer'
import { Navigation }     from '@fragments/navigation'
import { NotFound }       from '@landing/404-fragment'
import { Column }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Preloader }      from '@ui/preloader'

import { Language }       from './store'
import { languageVar }    from './store'

const Page404 = () => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <Preloader>
      <Box height='100vh' backgroundColor='background.lightBeige'>
        <Column width='100%'>
          <Navigation language={language} languageVar={languageVar} />
          <NotFound language={language} />
          <LandingFooter language={language} />
        </Column>
      </Box>
    </Preloader>
  )
}

export { Page404 }
