import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          title
          content
          image {
            altText
            sourceUrl
          }
          role
        }
        language {
          code
        }
      }
    }
  }
`
