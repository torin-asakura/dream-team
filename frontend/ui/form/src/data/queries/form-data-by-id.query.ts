import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_FORM_DATA_BY_ID = gql`
  query GetFormDataById($id: ID!) {
    form(id: $id) {
      fields {
        nodes {
          fieldId
          label
        }
      }
    }
  }
`

const useFormData = (id) => {
  const { data, error } = useQuery(GET_FORM_DATA_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.form.fields.nodes
  }

  return []
}

export { useFormData }
