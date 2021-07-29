import React               from 'react'

import { Navigation }      from '@fragments/navigation'
import { LandingHero }     from '@fragments/landing-hero'
import { LandingAbout }    from '@fragments/landing-about'
import { LandingReviews }  from '@fragments/landing-reviews'
import { LandingTeam }     from '@fragments/landing-team'
import { LandingFeedback } from '@fragments/landing-feedback'
import { LandingFooter }   from '@fragments/landing-footer'

const Index = () => (
  <>
    <Navigation />
    <LandingHero />
    <LandingAbout />
    <LandingReviews />
    <LandingTeam />
    <LandingFeedback />
    <LandingFooter />
  </>
)

export { Index }
