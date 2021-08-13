import React              from 'react'
import { FC }             from 'react'
import { useReactiveVar } from '@apollo/client'

import { PrivacyPolicy }  from '@fragments/privacy-policy'
import { Navigation }     from '@fragments/navigation'
import { LandingFooter }  from '@fragments/landing-footer'

import { languageVar }    from './store'
import { Language }       from './store'

const PrivacyPolicyPage: FC = () => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <>
      <Navigation language={language} languageVar={languageVar} />
      <PrivacyPolicy language={language} />
      <LandingFooter language={language} />
    </>
  )
}

export { PrivacyPolicyPage }
