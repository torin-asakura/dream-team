import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const GET_HERO_CONTENT_EN = gql`
  query HeroContentEN {
  fragment(id: "cG9zdDo0ODM=") {
    title
    content
  }
}
`

const useHeroContentEN = () => {
  const { data, error } = useQuery(GET_HERO_CONTENT_EN)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data
  }

  return {}
}

export { useHeroContentEN }
