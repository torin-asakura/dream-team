import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { LandingFooter }  from '@fragments/landing-footer'
import { Navigation }     from '@fragments/navigation'
import { PrivacyPolicy }  from '@fragments/privacy-policy'

import { Language }       from './store'
import { languageVar }    from './store'

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
