/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { addApolloState }     from '@globals/data'
import { initializeApollo }   from '@globals/data'
import { PageUri }            from '@globals/data'
import { GET_FOOTER }         from '@landing/footer-fragment'
import { GET_NAVIGATION }     from '@landing/navigation-fragment'
import { GET_SEO }            from '@globals/data'
import { GET_PRIVACY_POLICY } from '@landing/privacy-policy-fragment'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoContent, navigationContent, privacyPolicyContent, footerContent

  const seoPromise = client.query({query:GET_SEO,variables:{uri:PageUri.PRIVACY_POLICY}})
  const navigationPromise = client.query({query:GET_NAVIGATION})
  const privacyPolicyPromise = client.query({query:GET_PRIVACY_POLICY})
  const footerPromise = client.query({query:GET_FOOTER})

  ;[seoContent,navigationContent,privacyPolicyContent,footerContent] = await Promise.allSettled([
    seoPromise,navigationPromise,privacyPolicyPromise,footerPromise])

  const SEO = {RU: seoContent.value.data.pageBy.seo || null, EN: seoContent.value.data.pageBy.translation.seo || null}
  const navigationData = navigationContent || null
  const privacyPolicyData = privacyPolicyContent || null
  const footerData = footerContent || null

  return addApolloState(client, {
    props: {
      SEO,
      navigationData,
      privacyPolicyData,
      footerData
    },
    revalidate: 3600,
  })

}
