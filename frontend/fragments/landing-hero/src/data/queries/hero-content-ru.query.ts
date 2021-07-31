import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_HERO_CONTENT_RU = gql`
  query HeroContentRU {
    fragment(id: "cG9zdDo0ODE=") {
      title
      content
    }
  }
`

const useHeroContentRU = () => {
  const { data, error } = useQuery(GET_HERO_CONTENT_RU)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data
  }

  return {}
}

export { useHeroContentRU }
