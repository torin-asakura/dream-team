import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { LandingFooter }            from '@fragments/landing-footer'
import { Navigation }               from '@fragments/navigation'
import { PrivacyPolicy }            from '@fragments/privacy-policy'
import { Preloader }                from '@ui/preloader'

import { Seo }                      from './seo.component'
import { Language }                 from './store'
import { languageVar }              from './store'

interface Props {
  SEO: any
  data: any
}

const PrivacyPolicyPage: FC<Props> = ({ SEO = { RU: {}, EN: {} }, data: { privacyPolicy } }) => {
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
        <main data-scroll-container ref={containerRef}>
          <PrivacyPolicy language={language} data={privacyPolicy} />
          <LandingFooter language={language} />
        </main>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default PrivacyPolicyPage
