/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { GET_FOOTER }       from '@landing/footer-fragment'
import { GET_NAVIGATION }   from '@landing/navigation-fragment'
import { addApolloState }   from '@globals/data'
import { initializeApollo } from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let navigationContent, footerContent

  const navigationPromise = client.query({ query: GET_NAVIGATION })

  const footerPromise = client.query({ query: GET_FOOTER })

  ;[navigationContent, footerContent] = await Promise.allSettled([navigationPromise, footerPromise])

  const navigationData = navigationContent || null
  const footerData = footerContent || null

  return addApolloState(client, {
    props: {
      navigationData,
      footerData,
    },
    revalidate: 3600,
  })
}
