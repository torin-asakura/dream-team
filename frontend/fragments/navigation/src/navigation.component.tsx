import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Condition }       from '@ui/condition'

import { useData }         from './useData'
import { NavigationProps } from './navigation.interface'
import { Language }        from './navigation.interface'

const Navigation: FC<NavigationProps> = ({ language, languageVar }) => {
  const [EN, RU] = useData()

  const switchLanguage = (language: Language) => () => {
    languageVar(language === 'RU' ? 'EN' : 'RU')
  }

  return (
    <Box px={['32px', '32px', '0px']} border='1px solid black' height={84}>
      <Layout flexGrow={1} />
      <Layout width='100%' maxWidth={1280}>
        <Row>
          <Box width={202} height='100%' border='1px solid black'>
            Logo
          </Box>
          <Layout flexGrow={1} flexBasis={[64, 64, 0]} />
          <Box width={212} height='100%' border='1px solid black'>
            <Condition match={language === 'RU'}>
              {RU?.map(({ label, url }) => (
                <a href={url}>{label}</a>
              ))}
            </Condition>
            <Condition match={language === 'EN'}>
              {EN?.map(({ label, url }) => (
                <a href={url}>{label}</a>
              ))}
            </Condition>
            <button onClick={switchLanguage(language)}>
              <Condition match={language === 'RU'}>РУ</Condition>
              <Condition match={language === 'EN'}>EN</Condition>
            </button>
          </Box>
        </Row>
      </Layout>
      <Layout flexGrow={1} />
    </Box>
  )
}

export { Navigation }
