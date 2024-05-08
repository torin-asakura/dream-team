import { gql } from '@apollo/client'

export const GET_CONTACTS = gql`
  query GetContacts {
    contactItems {
      nodes {
        contentAddons {
          title
          role
          content
        }
        language {
          code
        }
      }
    }
  }
`
