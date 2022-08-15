import { useReactiveVar }  from '@apollo/client'

import React               from 'react'
import { FC }              from 'react'

import { LandingContacts } from '@fragments/landing-contacts'
import { Navigation }      from '@fragments/navigation'
import { Preloader }       from '@ui/preloader'

import { Seo }             from './seo.component'
import { Language }        from './store'
import { languageVar }     from './store'

interface Props {
  SEO: any
  data: any
}

const ContactsPage: FC<Props> = ({ SEO = { RU: {}, EN: {} }, data: { contacts } }) => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <Preloader>
      <Seo SEO={SEO} language={language} />
      <Navigation language={language} languageVar={languageVar} />
      <LandingContacts language={language} data={contacts} />
    </Preloader>
  )
}

export default ContactsPage
