import { useQuery }        from '@apollo/client'

import { GET_ASSET_BY_ID } from './get-asset-by-id.query'

export interface GetAssetById {
  mediaItem?: {
    mediaItemUrl?: string
    mimeType?: string
  }
}

export const useGetAssetById = (id: string) => {
  const { data, error } = useQuery<GetAssetById>(GET_ASSET_BY_ID, { variables: { id } })

  if (error && process.env.NODE_ENV !== 'production') {
    throw new Error(error.message)
  }

  return {
    mediaItem: data?.mediaItem,
  }
}
