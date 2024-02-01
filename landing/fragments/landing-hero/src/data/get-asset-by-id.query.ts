import { gql } from '@apollo/client'

export const GET_ASSET_BY_ID = gql`
  query GetAssetById($id: ID!) {
    mediaItem(id: $id) {
      mediaItemUrl
      mimeType
    }
  }
`
