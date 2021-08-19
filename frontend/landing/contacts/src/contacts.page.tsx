import React               from 'react'
import { FC }              from 'react'
import { useReactiveVar }  from '@apollo/client'

import { Navigation }      from '@fragments/navigation'
import { LandingContacts } from '@fragments/landing-contacts'
import { languageVar }     from './store'
import { Language }        from './store'

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
