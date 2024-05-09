import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

export const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      nodes {
        title
        content
        menuOrder
        language {
          code
        }
        review {
          respondent
          companylink
          skills {
            ... on Skill {
              title
            }
          }
        }
      }
    }
  }
`

const runReviewsQuery = async () => {
  const client = getClient()

  const { data: reviewsData } = await client.query({
    query: GET_REVIEWS,
  })

  if (reviewsData) {
    return {
      reviews: {
        RU: reviewsData.reviews.nodes.filter(
          (reviewFragment) => reviewFragment.language.code === 'RU'
        ),
        EN: reviewsData.reviews.nodes.filter(
          (reviewFragment) => reviewFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { reviews: { RU: [], EN: [] } }
}

export { runReviewsQuery }
