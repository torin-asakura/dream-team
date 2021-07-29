import React                   from 'react'

import { Navigation }          from '@fragments/navigation'
import { LandingIntroduction } from '@fragments/landing-introduction'
import { LandingAbout }        from '@fragments/landing-about'
import { LandingReviews }      from '@fragments/landing-reviews'
import { LandingDreamTeam }    from '@fragments/landing-dream-team'
import { LandingFeedback }     from '@fragments/landing-feedback'
import { LandingFooter }       from '@fragments/landing-footer'

const Index = () => {
  return (
    <>
      <Navigation />
      <LandingIntroduction />
      <LandingAbout />
      <LandingReviews />
      <LandingDreamTeam />
      <LandingFeedback />
      <LandingFooter />
    </>
  )
}

export { Index }
