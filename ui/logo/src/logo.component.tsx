import React                   from 'react'
import { FC }                  from 'react'

import { Condition }           from '@ui/condition'
import { DreamTeamIcon }       from '@ui/icons'
import { DreamTeamMobileIcon } from '@ui/icons'
import { Image }               from '@ui/image'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { NextLink }            from '@ui/link'

import { LogoProps }           from './logo.interface'
import { useSphere }           from './data'

const Logo: FC<LogoProps> = ({ mobile = false }) => {
  const sphere = useSphere()

  return (
    <Layout>
      <NextLink href='/' rel='up' title='Home page'>
        <Row alignItems='center'>
          <Layout width={[44, 44, 49]} height={[44, 44, 44]}>
            <Image src={sphere?.sourceUrl} alt={sphere?.altText} contain />
          </Layout>
          <Layout flexBasis={[8, 8, 24]} />
          <Layout width={[103, 103, 203]}>
            <Condition match={!mobile}>
              <DreamTeamIcon width='100%' height='100%' />
            </Condition>
            <Condition match={mobile}>
              <DreamTeamMobileIcon width='100%' height='100%' />
            </Condition>
          </Layout>
        </Row>
      </NextLink>
    </Layout>
  )
}
export { Logo }
