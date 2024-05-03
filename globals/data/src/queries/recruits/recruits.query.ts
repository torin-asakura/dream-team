import { gql } from '../../__generated__'

export const GET_RECRUITS = gql(`
  query GetRecruits {
    recruits {
      nodes {
        title
        featuredImage {
          node {
            mediaItemUrl
            title
          }
        }
        language {
          code
        }
      }
    }
  }
`)
