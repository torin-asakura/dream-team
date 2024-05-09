/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { PageUri }          from '@globals/data'
import { GET_SEO }          from '@globals/data'
import { GET_ABOUT }        from '@landing/about-fragment'
import { GET_FEEDBACK }     from '@landing/feedback-fragment'
import { GET_FOOTER }       from '@landing/footer-fragment'
import { GET_HERO }         from '@landing/hero-fragment'
import { GET_NAVIGATION }   from '@landing/navigation-fragment'
import { GET_REVIEWS }      from '@landing/reviews-fragment'
import { GET_RECRUITS }     from '@landing/team-fragment'
import { GET_SKILLS }       from '@landing/work-directions-fragment'
import { addApolloState }   from '@globals/data'
import { initializeApollo } from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoContent,
    navigationContent,
    footerContent,
    heroContent,
    aboutContent,
    reviewsContent,
    feedbackContent,
    skillsContent,
    recruitsContent

  const seoPromise = client.query({ query: GET_SEO, variables: { uri: PageUri.INDEX } })
  const navigationPromise = client.query({ query: GET_NAVIGATION })
  const footerPromise = client.query({ query: GET_FOOTER })

  const heroPromise = client.query({ query: GET_HERO })
  const aboutPromise = client.query({ query: GET_ABOUT })
  const reviewsPromise = client.query({ query: GET_REVIEWS })
  const feedbackPromise = client.query({ query: GET_FEEDBACK })
  const skillsPromise = client.query({ query: GET_SKILLS })
  const recruitsPromise = client.query({ query: GET_RECRUITS })

  ;[
    seoContent,
    navigationContent,
    footerContent,

    heroContent,
    aboutContent,
    reviewsContent,
    feedbackContent,
    skillsContent,
    recruitsContent,
  ] = await Promise.allSettled([
    seoPromise,
    navigationPromise,
    footerPromise,
    heroPromise,
    aboutPromise,
    reviewsPromise,
    feedbackPromise,
    skillsPromise,
    recruitsPromise,
  ])

  const SEO = {
    RU: seoContent.value.data.pageBy.seo || null,
    EN: seoContent.value.data.pageBy.translation.seo || null,
  }
  const navigationData = navigationContent || null
  const footerData = footerContent || null

  const heroData = heroContent || null
  const aboutData = aboutContent || null
  const reviewsData = reviewsContent || null
  const feedbackData = feedbackContent || null
  const skillsData = skillsContent || null
  const recruitsData = recruitsContent || null

  return addApolloState(client, {
    props: {
      SEO,
      navigationData,
      footerData,

      heroData,
      aboutData,
      reviewsData,
      feedbackData,
      skillsData,
      recruitsData,
    },
    revalidate: 3600,
  })
}
