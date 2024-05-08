/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { initializeApollo } from '@globals/data'
import { GET_NAVIGATION }   from '@landing/navigation-fragment'
import { GET_SEO }          from '@globals/data'
import { PageUri }          from '@globals/data'
import { GET_CONTACTS }     from '@landing/contacts-fragment'
import {addApolloState} from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoContent,navigationContent,contactsContent

  const seoPromise = client.query({query:GET_SEO,variables:{uri:PageUri.CONTACTS}})

  const navigationPromise = client.query({query:GET_NAVIGATION})

  const contactsPromise = client.query({query:GET_CONTACTS})

  ;[seoContent,navigationContent,contactsContent] = await Promise.allSettled([
    seoPromise,navigationPromise,contactsPromise
  ])

  const SEO = {RU: seoContent.value.data.pageBy.seo || null, EN: seoContent.value.data.pageBy.translation.seo || null}
  const navigationData = navigationContent || null
  const contactsData = contactsContent || null

  return addApolloState(client, {
    props: {
      SEO,
      navigationData,
      contactsData
    },
    revalidate: 3600,
  })
}
