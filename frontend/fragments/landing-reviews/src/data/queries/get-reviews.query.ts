import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      nodes {
        title
        content
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
    return data.reviews.nodes
  }

  return []
}

export { useReviews }
