import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

export const GET_NAVIGATION = gql`
  query GetNavigation {
    navigationItems {
      nodes {
        contentAddons {
          title
          content
          role
        }
        language {
          code
        }
      }
    }
  }
`

const runNavigationQuery = async () => {
  const client = getClient()

  const { data: navigationData } = await client.query({
    query: GET_NAVIGATION,
  })

  if (navigationData) {
    return {
      navigation: {
        RU: navigationData.navigationItems.nodes.filter(
          (navigationFragment) => navigationFragment.language.code === 'RU'
        ),
        EN: navigationData.navigationItems.nodes.filter(
          (navigationFragment) => navigationFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { navigation: { RU: [], EN: [] } }
}

export { runNavigationQuery }
