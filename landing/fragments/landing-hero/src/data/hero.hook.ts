import { useQuery } from '@apollo/client'

import { GET_HERO } from './hero.query'

export const useHero = () => {
  const { data } = useQuery(GET_HERO, { fetchPolicy: 'cache-only' })

  if (!data) {
    return { heroData: { RU: [], EN: [] } }
  }

  return {
    heroData: {
      RU: data.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'RU'),
      EN: data.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'EN'),
    },
  }
}
