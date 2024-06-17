import { useReactiveVar }            from '@apollo/client'

import React                         from 'react'
import { FC }                        from 'react'
import { useRef }                    from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { LandingAbout }              from '@landing/about-fragment'
import { LandingFeedback }           from '@landing/feedback-fragment'
import { LandingFooter }             from '@landing/footer-fragment'
import { LandingHero }               from '@landing/hero-fragment'
import { Navigation }                from '@landing/navigation-fragment'
import { LandingReviews }            from '@landing/reviews-fragment'
import { LandingTeam }               from '@landing/team-fragment'
import { Seo }                       from '@shared/seo'
import { Preloader }                 from '@ui/preloader'
import { ScrollContainer }           from '@ui/scroll'

import { LOCOMOTIVE_SCROLL_WATCH }   from './index.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './index.constants'
import { IndexPageProps }            from './index.interfaces'
import { Language }                  from './store'
import { languageVar }               from './store'

const IndexPage: FC<IndexPageProps> = ({ SEO }) => {
  const language = useReactiveVar<Language>(languageVar)
  const containerRef = useRef(null)
  return (
    <Preloader>
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        watch={LOCOMOTIVE_SCROLL_WATCH}
        containerRef={containerRef}
      >
        <Navigation language={language} languageVar={languageVar} />
        <Seo language={language} SEO={SEO} />
        <ScrollContainer data-scroll-container ref={containerRef}>
          <LandingHero language={language} />
          <LandingAbout language={language} />
          <LandingReviews language={language} />
          <LandingTeam language={language} />
          <LandingFeedback language={language} />
          <LandingFooter language={language} />
        </ScrollContainer>
      </LocomotiveScrollProvider>
    </Preloader>
  )
}

export default IndexPage
