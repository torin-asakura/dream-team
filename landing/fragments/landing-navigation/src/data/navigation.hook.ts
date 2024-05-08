import { useQuery }       from '@apollo/client'
import { GET_NAVIGATION } from './navigation.query'

export const useNavigation = () => {

  const {data} = useQuery(GET_NAVIGATION,{fetchPolicy: 'cache-only' })

  if (!data){ return {navigationData: { RU: [], EN: [] }}}

  return {
    navigationData: {
      RU: data?.navigationItems?.nodes?.filter((navigationFragment) => navigationFragment?.language?.code === 'RU'),
      EN: data?.navigationItems?.nodes?.filter((navigationFragment) => navigationFragment?.language?.code === 'EN'),
    }
  }

}
