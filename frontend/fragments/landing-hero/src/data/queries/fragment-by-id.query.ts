import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_FRAGMENT_BY_ID = gql`
  query HeroContentEN($id: ID!) {
    fragment(id: "cG9zdDo0ODM=") {
      title
      content
    }
  }
`

const useHeroContentEN = (id) => {
  const { data, error } = useQuery(GET_FRAGMENT_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data
  }

  return {}
}

export { useHeroContentEN }
