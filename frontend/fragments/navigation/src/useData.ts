import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_MENUS = gql`
  query GetMenus {
    menus {
      nodes {
        menuItems {
          nodes {
            path
            id
            label
          }
        }
        name
      }
    }
  }
`

const useData = () => {
  const { data, error } = useQuery(GET_MENUS)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.menus.nodes.map(({ menuItems: { nodes: menuNodes }, name }) =>
      menuNodes.map(({ label, path, url }) => ({ label, path, url, name }))
    )
  }

  return []
}

export { useData }
