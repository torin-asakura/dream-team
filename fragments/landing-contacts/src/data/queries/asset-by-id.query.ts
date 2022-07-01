import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_ASSET_BY_ID = gql`
  query GetAssetById($id: ID!) {
    mediaItem(id: $id) {
      mediaItemUrl
    }
  }
`

const useAssetById = (id) => {
  const { data, error } = useQuery(GET_ASSET_BY_ID, { variables: { id } })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.mediaItem
  }

  return {}
}

export { useAssetById }
