import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          title
          content
          image {
            node {
              altText
              sourceUrl
            }
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
