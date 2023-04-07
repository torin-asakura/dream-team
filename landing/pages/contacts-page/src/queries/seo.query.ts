import { gql } from '@apollo/client'

export const GET_CONTACTS_SEO = gql`
  query GetContactsSeo {
    pageBy(uri: "/contacts") {
      seo {
        title
        metaDesc
      }
      translation(language: EN) {
        seo {
          title
          metaDesc
        }
      }
    }
  }
`
