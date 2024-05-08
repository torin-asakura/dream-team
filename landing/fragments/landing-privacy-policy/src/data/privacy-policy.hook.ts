import { useQuery }           from '@apollo/client'

import { GET_PRIVACY_POLICY } from './privacy-policy.query'

export const usePrivacyPolicy = () => {
  const { data } = useQuery(GET_PRIVACY_POLICY,{fetchPolicy:'cache-only'})

  if (!data) {
    return { privacyPolicyData: { RU: [], EN: [] } }
  }

  return {
    privacyPolicyData: {
      RU: data.privacyPolicyItems.nodes.filter(
        (privacyPolicyFragment) => privacyPolicyFragment.language.code === 'RU'
      ),
      EN: data.privacyPolicyItems.nodes.filter(
        (privacyPolicyFragment) => privacyPolicyFragment.language.code === 'EN'
      ),
    },
  }
}
