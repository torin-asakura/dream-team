import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_FEEDBACK = gql`
  query GetFeedback {
    feedbackItems {
      nodes {
        contentAddons {
          title
          role
          content
          image {
            altText
            sourceUrl
          }
        }
        language {
          code
        }
      }
    }
  }
`

const runFeedbackQuery = async () => {
  const client = getClient()

  const { data: feedbackData } = await client.query({
    query: GET_FEEDBACK,
  })

  if (feedbackData) {
    return {
      feedback: {
        RU: feedbackData.feedbackItems.nodes.filter(
          (feedbackFragment) => feedbackFragment.language.code === 'RU'
        ),
        EN: feedbackData.feedbackItems.nodes.filter(
          (feedbackFragment) => feedbackFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { feedback: { RU: [], EN: [] } }
}

export { runFeedbackQuery }
