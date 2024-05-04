import { gql } from '../../__generated__'

export const GET_SEO = gql(`
  query GetSeo($uri:String!) {
    pageBy(uri: $uri) {
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
`)
