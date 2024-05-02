import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { LandingFooter }            from '@landing/footer-fragment'
import { Navigation }               from '@landing/navigation-fragment'
import { PrivacyPolicy }            from '@landing/privacy-policy-fragment'
import { Preloader }                from '@ui/preloader'
import { ScrollContainer }          from '@ui/scroll'
import { PrivacyPolicyPageProps }   from './privacy-policy.interfaces'

import { Seo }                      from './seo.component'
import { Language }                 from './store'
import { languageVar }              from './store'


const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = ({ footerData,navigationData,SEO = { RU: {}, EN: {} }, data: { privacyPolicy } }) => {
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
          <PrivacyPolicy language={language} data={privacyPolicy} />
          <LandingFooter footerData={footerData} language={language} />
        </ScrollContainer>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default PrivacyPolicyPage
