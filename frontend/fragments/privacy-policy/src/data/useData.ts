import { useFragmentById }   from './queries'
import { PRIVACY_POLICY_EN } from './constants'
import { PRIVACY_POLICY_RU } from './constants'

const useData = () => {
  const privacyPolicyEn = useFragmentById(PRIVACY_POLICY_EN)
  const privacyPolicyRu = useFragmentById(PRIVACY_POLICY_RU)

  return {
    EN: privacyPolicyEn,
    RU: privacyPolicyRu,
  }
}

export { useData }
