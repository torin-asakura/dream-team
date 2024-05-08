import { useQuery }   from '@apollo/client'
import { GET_FOOTER } from './footer.query'
import { filter }        from '@globals/data'

export const useFooter = () => {

  const {data} = useQuery(GET_FOOTER,{fetchPolicy:'cache-only'})

  if (!data) {return { footerData: { RU: [], EN: [] } }}

  return{
    footerData: filter(data?.footerItems.nodes)
  }
}
