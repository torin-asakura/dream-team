import { gql } from '../../__generated__'

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
