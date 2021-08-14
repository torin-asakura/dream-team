import React                  from 'react'
import { FC }                 from 'react'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'

import { useData }            from './data'
import { PrivacyPolicyProps } from './privacy-policy.interface'

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ language }) => {
  const data = useData()

  return (
    <Layout width='100%' height='100%' justifyContent='center' alignItems='center'>
      <Layout height='100%' width='100%' maxWidth={1280}>
        <Column width='100%'>
          <Layout flexBasis={64} />
          <Layout>
            <Text fontSize='big' color='text.black' fontWeight='slim'>
              {data[language].title}
            </Text>
          </Layout>
          <Layout flexBasis={32} />
          <Column width='100%'>
            {(data[language]?.content || []).map((paragraph) => (
              <>
                <Text fontSize='regular' color='text.black'>
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
