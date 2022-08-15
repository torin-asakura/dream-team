import { gql } from '@apollo/client'

const GET_FORMS = gql`
  query GetForms {
    forms {
      nodes {
        title
        fields {
          nodes {
            fieldId
            label
          }
        }
      }
    }
  }
`

export { GET_FORMS }
