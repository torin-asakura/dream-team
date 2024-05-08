import React                  from 'react'
import { FC }                 from 'react'

import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { extractObject }    from '@globals/data'
import { usePrivacyPolicy } from './data'

import { PrivacyPolicyProps } from './privacy-policy.interface'

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ language }) => {

  const {privacyPolicyData} = usePrivacyPolicy()

  const policyObj = extractObject('contentAddons', 'lead', privacyPolicyData[language])

  const policyContent = policyObj.content
  const policyTitle = policyObj.title

  return (
    <Layout width='100%' height='100%' justifyContent='center' alignItems='center'>
      <Layout height='100%' width='100%' maxWidth={1280} px={['20px', '20px', '0px']}>
        <Column width='100%'>
          <Layout flexBasis={104} />
          <Layout>
            <Text fontSize='big' color='text.black' fontWeight='slim'>
              {policyTitle}
            </Text>
          </Layout>
          <Layout flexBasis={32} />
          <Column width='100%'>
            {policyContent.split('|n|').map((paragraph) => (
              <>
                <Text fontSize='regular' color='text.black' lineHeight='primary'>
                  {paragraph}
                </Text>
                <Layout flexBasis={32} />
              </>
            ))}
          </Column>
        </Column>
      </Layout>
    </Layout>
  )
}

export { PrivacyPolicy }
