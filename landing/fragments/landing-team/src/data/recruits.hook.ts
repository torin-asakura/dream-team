import { useQuery }            from '@apollo/client'

import { removeParagraphTags } from '@ui/utils'

import { GET_RECRUITS }        from './recruits.query'

export const useRecruits = () => {
  const { data } = useQuery(GET_RECRUITS)

  if (!data) {
    return { recruitsData: [] }
  }

  const recruitsData = data.recruits.nodes.map((node) => removeParagraphTags(node))

  return { recruitsData }
}
