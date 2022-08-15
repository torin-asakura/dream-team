import { useQuery }  from '@apollo/client'

import { GET_FORMS } from './queries'
import { filter }    from './filter'

const useForms = () => {
  const { data } = useQuery(GET_FORMS)

  if (data) {
    return filter(data.forms.nodes)
  }

  return []
}

export { useForms }
