import { gql } from '@apollo/client'

export const GET_FOOTER = gql`
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
`
