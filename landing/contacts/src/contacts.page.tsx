import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { LandingContacts }          from '@fragments/landing-contacts'
import { Navigation }               from '@fragments/navigation'
import { Preloader }                from '@ui/preloader'
import { ScrollContainer }          from '@ui/scroll'

import { Seo }                      from './seo.component'
import { Language }                 from './store'
import { languageVar }              from './store'

interface Props {
  SEO: any
  data: any
}

const ContactsPage: FC<Props> = ({ SEO = { RU: {}, EN: {} }, data: { contacts } }) => {
  const language = useReactiveVar<Language>(languageVar)
  const containerRef = useRef(null)

  return (
    <Preloader>
      <Seo SEO={SEO} language={language} />
      <Navigation language={language} languageVar={languageVar} />
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
