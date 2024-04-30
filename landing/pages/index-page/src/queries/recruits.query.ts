import { gql }       from '@apollo/client'


export const GET_RECRUITS = gql`
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
`
