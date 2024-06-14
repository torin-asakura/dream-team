import { gql } from '@apollo/client'

export const GET_ABOUT = gql`
  query GetAbout {
    aboutItems {
      nodes {
        contentAddons {
          title
          content
          excerpt
          image {
            node {
              altText
              sourceUrl
            }
          }
          role
          order
        }
        language {
          code
        }
      }
    }
  }
`
