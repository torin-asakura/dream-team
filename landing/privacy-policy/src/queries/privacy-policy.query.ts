import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_PRIVACY_POLICY = gql`
  query GetPrivacyPolicy {
    privacyPolicyItems {
      nodes {
        language {
          code
        }
        contentAddons {
          title
          role
          content
        }
      }
    }
  }
`

const runPrivacyPolicyQuery = async () => {
  const client = getClient()

  const { data: privacyPolicyData } = await client.query({
    query: GET_PRIVACY_POLICY,
  })

  if (privacyPolicyData) {
    return {
      privacyPolicy: {
        RU: privacyPolicyData.privacyPolicyItems.nodes.filter(
          (privacyPolicyFragment) => privacyPolicyFragment.language.code === 'RU'
        ),
        EN: privacyPolicyData.privacyPolicyItems.nodes.filter(
          (privacyPolicyFragment) => privacyPolicyFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { privacyPolicy: { RU: [], EN: [] } }
}

export { runPrivacyPolicyQuery }
