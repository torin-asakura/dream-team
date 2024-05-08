import { useQuery }            from '@apollo/client'

import { GET_SOCIAL_NETWORKS } from './social-networks.query'

const useSocialNetworks = () => {
  const { data } = useQuery(GET_SOCIAL_NETWORKS,{fetchPolicy:'cache-only'})

  return { data: data?.socialNetworks.nodes || [] }
}

export { useSocialNetworks }
