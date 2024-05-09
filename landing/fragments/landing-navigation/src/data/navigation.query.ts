import { gql } from '@apollo/client'

export const GET_NAVIGATION = gql(`
  query GetNavigation {
    navigationItems {
      nodes {
        contentAddons {
          title
          content
          role
        }
        language {
          code
        }
      }
    }
  }
`)
