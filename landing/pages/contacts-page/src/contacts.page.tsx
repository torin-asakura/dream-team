import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { LandingContacts }          from '@landing/contacts-fragment'
import { Navigation }               from '@landing/navigation-fragment'
import { Preloader }                from '@ui/preloader'
import { ScrollContainer }          from '@ui/scroll'
import { ContactsPageProps }        from './contacts.interfaces'

import { Seo }                      from './seo.component'
import { Language }                 from './store'
import { languageVar }              from './store'



const ContactsPage: FC<ContactsPageProps> = ({navigationData, SEO = { RU: {}, EN: {} }, data: { contacts } }) => {
  const language = useReactiveVar<Language>(languageVar)
  const containerRef = useRef(null)

  return (
    <Preloader>
      <Seo SEO={SEO} language={language} />
      <Navigation navigationData={navigationData} language={language} languageVar={languageVar} />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <ScrollContainer data-scroll-container ref={containerRef}>
          <LandingContacts language={language} data={contacts} />
        </ScrollContainer>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default ContactsPage
