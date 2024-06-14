import { useQuery }   from '@apollo/client'

import { GET_ABOUT } from './about.query'

export const useAbout = () => {
  const { data } = useQuery(GET_ABOUT,
    // { fetchPolicy: 'cache-only' }
  )

  if (!data) {
    return { aboutData: { RU: [], EN: [] } }
  }

  return {
    aboutData: {
      RU: data.aboutItems.nodes.filter((aboutFragment) => aboutFragment.language.code === 'RU'),
      EN: data.aboutItems.nodes.filter((aboutFragment) => aboutFragment.language.code === 'EN'),
    },
  }
}
