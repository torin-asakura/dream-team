import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

import { validate } from '../validate'

const GET_FRAGMENT_BY_ID = gql`
  query GetFragmentById($id: ID!) {
    fragment(id: $id) {
      title
      content
    }
  }
`

const useFragmentById = (id) => {
  const { data, error } = useQuery(GET_FRAGMENT_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return validate(data.fragment)
  }

  return {}
}

export { useFragmentById }
