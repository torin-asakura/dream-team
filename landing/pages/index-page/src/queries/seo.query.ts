import { gql } from '@apollo/client'

export const GET_INDEX_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/") {
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
