import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

import { validate } from '../validate'

const GET_SOCIAL_NETWORK_BY_ID = gql`
  query GetSocialNetworkById($id: ID!) {
    socialNetwork(id: $id) {
      title
      content
    }
  }
`

const useSocialNetworkById = (id) => {
  const { data, error } = useQuery(GET_SOCIAL_NETWORK_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return validate(data.socialNetwork)
  }

  return {}
}

export { useSocialNetworkById }
