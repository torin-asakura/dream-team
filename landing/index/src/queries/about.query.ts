import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_ABOUT = gql`
  query GetAbout {
    aboutItems {
      nodes {
        contentAddons {
          title
          content
          excerpt
          image {
            altText
            sourceUrl
          }
          role
          order
        }
        language {
          code
        }
      }
    }
  }
`

const runAboutQuery = async () => {
  const client = getClient()

  const { data: aboutData } = await client.query({
    query: GET_ABOUT,
  })

  if (aboutData) {
    return {
      about: {
        RU: aboutData.aboutItems.nodes.filter(
          (aboutFragment) => aboutFragment.language.code === 'RU'
        ),
        EN: aboutData.aboutItems.nodes.filter(
          (aboutFragment) => aboutFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { about: { RU: [], EN: [] } }
}

export { runAboutQuery }
