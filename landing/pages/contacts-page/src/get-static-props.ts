import { GET_NAVIGATION }   from '@globals/data'
import { getClient }        from '@globals/data'

import { GET_CONTACTS_SEO } from './queries'
import { runContactsQuery } from './queries'

export const getStaticProps = async () => {
  const client = getClient()

  let SEO

  const { data: seoData } = await client.query({
    query: GET_CONTACTS_SEO,
  })

  if (seoData) {
    SEO = {
      RU: seoData.pageBy.seo,
      EN: seoData.pageBy.translation.seo,
    }
  } else SEO = { RU: {}, EN: {} }

  const queryPromises: Array<Promise<any>> = [runContactsQuery()]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  const { data: navigationContent } = await client.query({ query: GET_NAVIGATION })

  const navigationData = navigationContent.navigationItems.nodes

  return { props: { SEO, data, navigationData }, revalidate: 3600 }
}
