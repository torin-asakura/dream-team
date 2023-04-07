import { getClient }              from '@globals/data'

import { GET_PRIVACY_POLICY_SEO } from './queries'
import { runPrivacyPolicyQuery }  from './queries'

export const getServerSideProps = async () => {
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

  return { props: { SEO, data } }
}
