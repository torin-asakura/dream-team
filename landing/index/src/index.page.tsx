import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { LandingAbout }             from '@fragments/landing-about'
import { LandingFeedback }          from '@fragments/landing-feedback'
import { LandingFooter }            from '@fragments/landing-footer'
import { LandingHero }              from '@fragments/landing-hero'
import { LandingReviews }           from '@fragments/landing-reviews'
import { LandingTeam }              from '@fragments/landing-team'
import { Navigation }               from '@fragments/navigation'
import { Preloader }                from '@ui/preloader'

import { Seo }                      from './seo.component'
import { Language }                 from './store'
import { languageVar }              from './store'

interface Props {
  data: any
  SEO: any
}

const Fragments = ({ language, data: { hero, about, reviews, feedback } }) => (
  <>
    <LandingHero language={language} data={hero} />
    <LandingAbout language={language} data={about} />
    <LandingReviews language={language} data={reviews} />
    <LandingTeam language={language} />
    <LandingFeedback language={language} data={feedback} />
    <LandingFooter language={language} />
  </>
)

const IndexPage: FC<Props> = ({ SEO = { RU: {}, EN: {} }, data }) => {
  const language = useReactiveVar<Language>(languageVar)
  const containerRef = useRef(null)

  return (
    <Preloader>
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
        <Navigation language={language} languageVar={languageVar} />
        <Seo language={language} SEO={SEO} />
        <main data-scroll-container ref={containerRef}>
          <Fragments language={language} data={data} />
        </main>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default IndexPage
