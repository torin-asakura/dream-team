import { GET_FOOTER }     from '@globals/data'
import { GET_NAVIGATION } from '@globals/data'
import { getClient }      from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  const { data: navigationContent } = await client.query({ query: GET_NAVIGATION })

  const navigationData = navigationContent.navigationItems?.nodes

  const { data: footerContent } = await client.query({ query: GET_FOOTER })

  const footerData = footerContent.footerItems?.nodes

  return { props: { navigationData, footerData }, revalidate: 3600 }
}
