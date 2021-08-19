import React                   from 'react'
import { FC }                  from 'react'

import { Condition }           from '@ui/condition'
import { DreamTeamIcon }       from '@ui/icons'
import { DreamTeamMobileIcon } from '@ui/icons'
import { Layout }              from '@ui/layout'
import { NextLink }            from '@ui/link'

import { LogoProps }           from './logo.interface'

const Logo: FC<LogoProps> = ({ mobile = false }) => (
  <Layout>
    <NextLink href='/' rel='up' title='Home page'>
      <Layout width={[103, 103, 203]} height={26}>
        <Condition match={!mobile}>
          <DreamTeamIcon width='100%' height='100%' />
        </Condition>
        <Condition match={mobile}>
          <DreamTeamMobileIcon width={68} height={40} />
        </Condition>
      </Layout>
    </NextLink>
  </Layout>
)

export { Logo }
