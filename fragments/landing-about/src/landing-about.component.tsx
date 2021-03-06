import React                     from 'react'
import { FC }                    from 'react'

import { LandingWorkDirections } from '@fragments/landing-work-directions'
import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'

import { Item }                  from './item'
import { LandingAboutProps }     from './landing-about.interface'
import { Language }              from './landing-about.interface'
import { useData }               from './data'

const getContentByLanguage = (contentObject, language: Language) =>
  language === 'RU' ? contentObject.RU : contentObject.EN

const LandingAbout: FC<LandingAboutProps> = ({ language }) => {
  const { costs, timeFrame, howWeDo, whyUs } = useData()

  return (
    <Box px={['32px', '32px', '0px']}>
      <Column
        width='100%'
        height={['auto', 'auto', '100%']}
        justifyContent='center'
        alignItems='center'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%' height={['auto', 'auto', '100%']}>
            <Layout flexBasis={160} />
            <Item contentObject={getContentByLanguage(whyUs, language)} />
            <Layout flexBasis={160} />
            <Item contentObject={getContentByLanguage(howWeDo, language)} />
            <Layout flexBasis={160} />
            <LandingWorkDirections language={language} />
            <Layout flexBasis={160} />
            <Item contentObject={getContentByLanguage(timeFrame, language)} />
            <Layout flexBasis={160} />
            <Item contentObject={getContentByLanguage(costs, language)} />
            <Layout flexBasis={160} />
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingAbout }
