import React               from 'react'
import { FC }              from 'react'
import { useReactiveVar }  from '@apollo/client'

import { Navigation }      from '@fragments/navigation'
import { LandingHero }     from '@fragments/landing-hero'
import { LandingAbout }    from '@fragments/landing-about'
import { LandingReviews }  from '@fragments/landing-reviews'
import { LandingTeam }     from '@fragments/landing-team'
import { LandingFeedback } from '@fragments/landing-feedback'
import { LandingFooter }   from '@fragments/landing-footer'

import { languageVar }     from './store'
import { Language }        from './store'

const Index: FC = () => {
  const language = useReactiveVar<Language>(languageVar)

  return (
    <>
      <Navigation language={language} languageVar={languageVar} />
      <LandingHero language={language} />
      <LandingAbout language={language} />
      <LandingReviews language={language} />
      <LandingTeam language={language} />
      <LandingFeedback language={language} />
      <LandingFooter language={language} />
    </>
  )
}

export { Index }
