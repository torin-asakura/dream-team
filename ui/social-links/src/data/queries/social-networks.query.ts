import { gql } from '@apollo/client'

export const GET_SOCIAL_NETWORKS = gql`
  query GetSocialNetworks {
    socialNetworks {
      nodes {
        contentAddons {
          title
          role
          content
        }
      }
    }
  }
`
