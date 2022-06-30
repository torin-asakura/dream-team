import { useReactiveVar }  from '@apollo/client'

import React               from 'react'
import { FC }              from 'react'

import { LandingContacts } from '@fragments/landing-contacts'
import { Navigation }      from '@fragments/navigation'

import { Language }        from './store'
import { languageVar }     from './store'

const ContactsPage: FC = () => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <>
      <Navigation language={language} languageVar={languageVar} />
      <LandingContacts language={language} />
    </>
  )
}

export { ContactsPage }
