import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_CARD_BY_ID = gql`
  query CardByID($id: ID!) {
    fragment(id: $id) {
      excerpt
      content
      title
      language {
        code
      }
      fragments {
        reverse
      }
    }
  }
`

const useCardByID = (id) => {
  const { data, error } = useQuery(GET_CARD_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.fragment
  }

  return {}
}

export { useCardByID }
