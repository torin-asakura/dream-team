import { useQuery }       from '@apollo/client'

import { GET_NAVIGATION } from './navigation.query'

const useNavigation = () => {
  const { data } = useQuery(GET_NAVIGATION)

  if (data) {
    return {
      navigation: {
        RU: data.navigationItems.nodes.filter(
          (navigationFragment) => navigationFragment.language.code === 'RU'
        ),
        EN: data.navigationItems.nodes.filter(
          (navigationFragment) => navigationFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { navigation: { RU: [], EN: [] } }
}

export { useNavigation }
