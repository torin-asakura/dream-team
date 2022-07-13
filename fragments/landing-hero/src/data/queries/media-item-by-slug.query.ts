import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_MEDIA_ITEM_BY_SLUG = gql`
  query GetMediaItemBySlug($slug: String!) {
    mediaItemBy(uri: $slug) {
      sourceUrl
    }
  }
`

const useMediaItemBySlug = (slug: string) => {
  const { data, error } = useQuery(GET_MEDIA_ITEM_BY_SLUG, { variables: { slug } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.mediaItemBy?.sourceUrl
  }

  return {}
}

export { useMediaItemBySlug }
