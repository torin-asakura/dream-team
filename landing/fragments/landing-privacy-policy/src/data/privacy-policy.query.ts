import { gql }       from '@apollo/client'

export const GET_PRIVACY_POLICY = gql`
  query GetPrivacyPolicy {
    privacyPolicyItems {
      nodes {
        language {
          code
        }
        contentAddons {
          title
          role
          content
        }
      }
    }
  }
`
