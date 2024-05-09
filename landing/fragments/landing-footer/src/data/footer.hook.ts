import { useQuery }   from '@apollo/client'

import { filter }     from '@globals/data'

import { GET_FOOTER } from './footer.query'

export const useFooter = () => {
  const { data } = useQuery(GET_FOOTER, { fetchPolicy: 'cache-only' })

  if (!data) {
    return { footerData: { RU: [], EN: [] } }
  }

  return {
    footerData: filter(data?.footerItems.nodes),
  }
}
