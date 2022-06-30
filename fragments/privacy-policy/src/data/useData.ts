import { PRIVACY_POLICY_EN } from './constants'
import { PRIVACY_POLICY_RU } from './constants'
import { useFragmentById }   from './queries'

const useData = () => {
  const privacyPolicyEn = useFragmentById(PRIVACY_POLICY_EN)
  const privacyPolicyRu = useFragmentById(PRIVACY_POLICY_RU)

  return {
    EN: privacyPolicyEn,
    RU: privacyPolicyRu,
  }
}

export { useData }
