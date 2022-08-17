import { getClient }        from '@globals/data'

import { GET_INDEX_SEO }    from './queries'
import { runFeedbackQuery } from './queries'
import { runReviewsQuery }  from './queries'
import { runHeroQuery }     from './queries'
import { runAboutQuery }    from './queries'

export const getServerSideProps = async () => {
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

  return { props: { SEO, data } }
}
