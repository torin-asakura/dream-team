import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

import { validate } from '../validate'

const GET_REVIEWS = gql`
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
        }
      }
    }
  }
`

const useReviews = () => {
  const { data, error } = useQuery(GET_REVIEWS)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.reviews.nodes.map((node) => validate(node))
  }

  return []
}

export { useReviews }
