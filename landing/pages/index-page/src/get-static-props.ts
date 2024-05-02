import { getClient }    from '@globals/data'
import { GET_FOOTER }   from '@globals/data'
import { GET_RECRUITS } from '@globals/data'

import { GET_INDEX_SEO }    from './queries'
import { runFeedbackQuery } from './queries'
import { runReviewsQuery }  from './queries'
import { runHeroQuery }     from './queries'
import { runAboutQuery }    from './queries'
import { GET_NAVIGATION }   from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  let SEO

  const { data: seoData } = await client.query({
    query: GET_INDEX_SEO,
  })

  if (seoData) {
    SEO = {
      RU: seoData.pageBy.seo,
      EN: seoData.pageBy.translation.seo,
    }
  } else SEO = { RU: {}, EN: {} }

  const queryPromises: Array<Promise<any>> = [
    runHeroQuery(),
    runAboutQuery(),
    runReviewsQuery(),
    runFeedbackQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  const {data:navigationContent} = await client.query({query:GET_NAVIGATION})

  const navigationData = navigationContent.navigationItems.nodes

  const {data: footerContent} = await client.query({query:GET_FOOTER})

  const footerData = footerContent.footerItems.nodes


  const {data: recruitsContent} = await client.query({query:GET_RECRUITS})

  const recruitsData = recruitsContent.recruits.nodes

  return { props: { SEO, data,navigationData,footerData,recruitsData },revalidate:3600 }
}
