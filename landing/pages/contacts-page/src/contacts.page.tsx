import { useReactiveVar }            from '@apollo/client'

import React                         from 'react'
import { FC }                        from 'react'
import { useRef }                    from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { LandingContacts }           from '@landing/contacts-fragment'
import { Navigation }                from '@landing/navigation-fragment'
import { Seo }                       from '@shared/seo'
import { Preloader }                 from '@ui/preloader'
import { ScrollContainer }           from '@ui/scroll'

import { LOCOMOTIVE_SCROLL_WATCH }   from './contacts.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './contacts.constants'
import { ContactsPageProps }         from './contacts.interfaces'
import { Language }                  from './store'
import { languageVar }               from './store'

const ContactsPage: FC<ContactsPageProps> = ({ SEO }) => {
  const language = useReactiveVar<Language>(languageVar)
  const containerRef = useRef(null)
  return (
    <Preloader>
      <Seo SEO={SEO} language={language} />
      <Navigation language={language} languageVar={languageVar} />
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        watch={LOCOMOTIVE_SCROLL_WATCH}
        containerRef={containerRef}
      >
        <ScrollContainer data-scroll-container ref={containerRef}>
          <LandingContacts language={language} />
        </ScrollContainer>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default ContactsPage
