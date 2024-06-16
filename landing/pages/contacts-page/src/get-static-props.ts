/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { GET_SEO }          from '@globals/data'
import { PageUri }          from '@globals/data'
import { GET_CONTACTS }     from '@landing/contacts-fragment'
import { GET_NAVIGATION }   from '@landing/navigation-fragment'
import { initializeApollo } from '@globals/data'
import { addApolloState }   from '@globals/data'
import {GET_FORMS} from '@ui/form'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoContent, navigationContent, contactsContent, formsContent

  const seoPromise = client.query({ query: GET_SEO, variables: { uri: PageUri.CONTACTS } })

  const navigationPromise = client.query({ query: GET_NAVIGATION })

  const contactsPromise = client.query({ query: GET_CONTACTS })

  const formsPromise = client.query({ query: GET_FORMS })


  ;[seoContent, navigationContent, contactsContent,formsContent] = await Promise.allSettled([
    seoPromise,
    navigationPromise,
    contactsPromise,
    formsPromise
  ])

  const SEO = {
    RU: seoContent.value.data.pageBy.seo || null,
    EN: seoContent.value.data.pageBy.translation.seo || null,
  }
  const navigationData = navigationContent || null
  const contactsData = contactsContent || null
  const formsData = formsContent || null

  return addApolloState(client, {
    props: {
      SEO,
      navigationData,
      contactsData,
      formsData
    },
    revalidate: 3600,
  })
}
