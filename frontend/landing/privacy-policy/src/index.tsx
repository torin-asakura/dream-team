import React                 from 'react'
import { FC }                from 'react'

import { PrivacyPolicyPage } from './privacy-policy.page'
import { Seo }               from './seo.component'

const PrivacyPolicy: FC = () => (
  <>
    <Seo />
    <PrivacyPolicyPage />
  </>
)

export default PrivacyPolicy
