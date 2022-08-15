import { getClient }              from '@globals/data'

import { GET_PRIVACY_POLICY_SEO } from './queries'

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

  return { props: { SEO } }
}
