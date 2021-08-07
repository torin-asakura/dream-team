import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

import { validate } from '../validate'

const GET_RECRUITS = gql`
  query GetRecruits {
    recruits {
      nodes {
        title
      }
    }
  }
`

const useRecruits = () => {
  const { data, error } = useQuery(GET_RECRUITS)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.recruits.nodes.map((node) => validate(node))
  }

  return []
}

export { useRecruits }
