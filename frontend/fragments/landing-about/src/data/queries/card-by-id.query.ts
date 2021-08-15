import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

import { validate } from '../validate'

const GET_CARD_BY = gql`
  query CardByID($id: ID!) {
    fragment(id: $id) {
      excerpt
      content
      title
      fragments {
        reverse
      }
    }
  }
`

const useCardByID = (id) => {
  const { data, error } = useQuery(GET_CARD_BY, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return validate(data.fragment)
  }

  return {}
}

export { useCardByID }
