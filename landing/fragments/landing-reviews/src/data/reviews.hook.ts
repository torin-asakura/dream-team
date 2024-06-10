import { useQuery }    from '@apollo/client'

import { GET_REVIEWS } from './reviews.query'

export const useReviews = () => {
  const { data } = useQuery(GET_REVIEWS, { fetchPolicy: 'cache-only' })

  if (!data) {
    return { reviewsData: { RU: [], EN: [] } }
  }

  return {
    reviewsData: {
      RU: data.reviews.nodes.filter((reviewFragment) => reviewFragment.language.code === 'RU'),
      EN: data.reviews.nodes.filter((reviewFragment) => reviewFragment.language.code === 'EN'),
    },
  }
}
