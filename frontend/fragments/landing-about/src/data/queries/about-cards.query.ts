import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const GET_ABOUT_CARDS = gql`
query GetAboutCards {
  fragmentTaxes(where: {name: "About"}) {
    nodes {
      fragments {
        nodes {
          excerpt
          content
          title
          language {
            code
          }
        }
      }
    }
  }
}
`

const useAboutCards = () => {
  const { data, error } = useQuery(GET_ABOUT_CARDS)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.fragmentTaxes.nodes[0].fragments.nodes
  }

  return []
}

export { useAboutCards }
