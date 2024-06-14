import { gql }       from '@apollo/client'


export const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      nodes {
        title
        menuOrder
        content
        language {
          code
        }
        customerReview {
          companyLink
          position
          respondent
          skills {
            edges {
              node {
                ... on Skill {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
