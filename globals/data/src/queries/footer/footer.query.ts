import { gql } from '../../__generated__'

export const GET_FOOTER = gql(`
  query GetFooter {
    footerItems {
      nodes {
        contentAddons {
          title
          role
          content
          excerpt
        }
        language {
          code
        }
      }
    }
  }
`)
