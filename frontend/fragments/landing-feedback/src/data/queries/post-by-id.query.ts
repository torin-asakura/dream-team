import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      title
      content
    }
  }
`

const usePostById = (id) => {
  const { data, error } = useQuery(GET_POST_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.post
  }

  return {}
}

export { usePostById }
