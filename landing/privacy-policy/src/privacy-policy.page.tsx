import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { LandingFooter }  from '@fragments/landing-footer'
import { Navigation }     from '@fragments/navigation'
import { PrivacyPolicy }  from '@fragments/privacy-policy'
import { Preloader }      from '@ui/preloader'

import { Seo }            from './seo.component'
import { Language }       from './store'
import { languageVar }    from './store'

interface Props {
  SEO: any
  data: any
}

const PrivacyPolicyPage: FC<Props> = ({ SEO = { RU: {}, EN: {} }, data: { privacyPolicy } }) => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <Preloader>
      <Seo SEO={SEO} language={language} />
      <Navigation language={language} languageVar={languageVar} />
      <PrivacyPolicy language={language} data={privacyPolicy} />
      <LandingFooter language={language} />
    </Preloader>
  )
}

export default PrivacyPolicyPage
