import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { LandingAbout }             from '@landing/about-fragment'
import { LandingFeedback }          from '@landing/feedback-fragment'
import { LandingFooter }            from '@landing/footer-fragment'
import { LandingHero }              from '@landing/hero-fragment'
import { Navigation }               from '@landing/navigation-fragment'
import { LandingReviews }           from '@landing/reviews-fragment'
import { LandingTeam }              from '@landing/team-fragment'
import { Preloader }                from '@ui/preloader'
import { ScrollContainer }          from '@ui/scroll'
import { IndexPageProps }           from './index.interfaces'

import { Seo }                      from './seo.component'
import { Language }                 from './store'
import { languageVar }              from './store'

const Fragments = ({ recruitsData, footerData,language, data: { hero, about, reviews,workDirections, feedback } }) => {
  return(
    <>
      <LandingHero language={language} data={hero} />
      <LandingAbout language={language} data={about} workDirectionsData={workDirections}/>
      <LandingReviews language={language} data={reviews} />
      <LandingTeam language={language} recruitsData={recruitsData} />
      <LandingFeedback language={language} data={feedback} />
      <LandingFooter language={language} footerData={footerData}/>
    </>
  )
}

const IndexPage: FC<IndexPageProps> = ({ recruitsData,footerData,navigationData,SEO = { RU: {}, EN: {} }, data }) => {
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
        <Navigation navigationData={navigationData} language={language} languageVar={languageVar} />
        <Seo language={language} SEO={SEO} />
        <ScrollContainer data-scroll-container ref={containerRef}>
          <Fragments recruitsData={recruitsData} language={language} data={data} footerData={footerData}/>
        </ScrollContainer>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default IndexPage
