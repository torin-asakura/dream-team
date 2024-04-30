import { getClient }              from '@globals/data'

import { GET_PRIVACY_POLICY_SEO } from './queries'
import { runPrivacyPolicyQuery }  from './queries'
import { GET_NAVIGATION }   from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  let SEO

  const { data: seoData } = await client.query({
    query: GET_PRIVACY_POLICY_SEO,
  })

  if (seoData) {
    SEO = {
      RU: seoData.pageBy.seo,
      EN: seoData.pageBy.translation.seo,
    }
  } else SEO = { RU: {}, EN: {} }

  const queryPromises: Array<Promise<any>> = [runPrivacyPolicyQuery()]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  const {data:navigationContent} = await client.query({query:GET_NAVIGATION})

  const navigationData = navigationContent.navigationItems.nodes


  return { props: { SEO, data,navigationData } }
}
