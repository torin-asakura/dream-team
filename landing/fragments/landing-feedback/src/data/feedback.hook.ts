import { useQuery }     from '@apollo/client'

import { GET_FEEDBACK } from './feedback.query'

export const useFeedback = () => {
  const { data } = useQuery(GET_FEEDBACK, { fetchPolicy: 'cache-only' })

  if (!data) {
    return { feedbackData: { RU: [], EN: [] } }
  }

  return {
    feedbackData: {
      RU: data.feedbackItems.nodes.filter(
        (feedbackFragment) => feedbackFragment.language.code === 'RU'
      ),
      EN: data.feedbackItems.nodes.filter(
        (feedbackFragment) => feedbackFragment.language.code === 'EN'
      ),
    },
  }
}
