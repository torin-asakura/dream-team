import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { Seo }                       from '@globals/seo'
import { LandingFooter }             from '@landing/footer-fragment'
import { Navigation }                from '@landing/navigation-fragment'
import { PrivacyPolicy }             from '@landing/privacy-policy-fragment'
import { Preloader }                 from '@ui/preloader'
import { ScrollContainer }           from '@ui/scroll'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './privacy-policy.constants'
import { LOCOMOTIVE_SCROLL_WATCH }   from './privacy-policy.constants'

import { PrivacyPolicyPageProps }   from './privacy-policy.interfaces'
import { Language }                 from './store'
import { languageVar }              from './store'

const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = ({ SEO }) => {
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
          <PrivacyPolicy language={language} />
          <LandingFooter  language={language} />
        </ScrollContainer>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default PrivacyPolicyPage
