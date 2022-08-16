import { useQuery }   from '@apollo/client'

import { filter }     from '@globals/data'

import { GET_FOOTER } from './footer.query'

const useFooter = () => filter(useQuery(GET_FOOTER).data?.footerItems.nodes || [])

export { useFooter }
