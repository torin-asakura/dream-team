import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

export const GET_CONTACTS = gql`
  query GetContacts {
    contactItems {
      nodes {
        contentAddons {
          title
          role
          content
        }
        language {
          code
        }
      }
    }
  }
`

const runContactsQuery = async () => {
  const client = getClient()

  const { data: contactsData } = await client.query({
    query: GET_CONTACTS,
  })

  if (contactsData) {
    return {
      contacts: {
        RU: contactsData.contactItems.nodes.filter(
          (contactFragment) => contactFragment.language.code === 'RU'
        ),
        EN: contactsData.contactItems.nodes.filter(
          (contactFragment) => contactFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { contacts: { RU: [], EN: [] } }
}

export { runContactsQuery }
