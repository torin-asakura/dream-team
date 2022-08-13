import { useReactiveVar }  from '@apollo/client'

import React               from 'react'
import { FC }              from 'react'

import { LandingContacts } from '@fragments/landing-contacts'
import { Navigation }      from '@fragments/navigation'
import { Preloader }       from '@ui/preloader'

import { Language }        from './store'
import { languageVar }     from './store'

const ContactsPage: FC = () => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <Preloader>
      <Navigation language={language} languageVar={languageVar} />
      <LandingContacts language={language} />
    </Preloader>
  )
}

export { ContactsPage }
