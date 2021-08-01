import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

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
    return data.recruits.nodes
  }

  return []
}

export { useRecruits }
