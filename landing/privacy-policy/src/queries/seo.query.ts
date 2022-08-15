import { gql } from '@apollo/client'

export const GET_PRIVACY_POLICY_SEO = gql`
  query GetPrivacyPolicySeo {
    pageBy(uri: "/privacy-policy") {
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
