import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

import { validate } from '../validate'

const GET_MESSENGER_BY_ID = gql`
  query GetMessengerById($id: ID!) {
    messenger(id: $id) {
      content
    }
  }
`

const useMessengerById = (id) => {
  const { data, error } = useQuery(GET_MESSENGER_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return validate(data.messenger)
  }

  return {}
}

export { useMessengerById }
