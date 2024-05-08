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
            altText
            sourceUrl
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
