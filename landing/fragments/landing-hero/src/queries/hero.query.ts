import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          title
          content
          image {
            altText
            sourceUrl
          }
          role
        }
        language {
          code
        }
      }
    }
  }
`

const runHeroQuery = async () => {
  const client = getClient()

  const { data: heroData } = await client.query({
    query: GET_HERO,
  })

  if (heroData) {
    return {
      hero: {
        RU: heroData.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'RU'),
        EN: heroData.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'EN'),
      },
    }
  }

  return { hero: { RU: [], EN: [] } }
}

export { runHeroQuery }
