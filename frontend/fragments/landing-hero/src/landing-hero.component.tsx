import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'
import { Content }   from './content'
import { Video }     from './video'

const LandingHero: FC<HeroProps> = ({ language }) => {
  const { Desktop, ...languages } = useData()

  return (
    <Box
      height={['auto', 'auto', '92vh']}
      minHeight={['92vh', '92vh', 'auto']}
      width='100%'
      overflow='hidden'
      backgroundColor='background.hero'
    >
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout flexDirection='row-reverse'>
          <Layout>
            <Video src={Desktop?.mediaItemUrl} mimeType={Desktop?.mimeType} />
          </Layout>
          <Layout flexBasis={[340, 340, 0]} />
          <Layout display={['flex', 'flex', 'none']} height={80} />
          <Content
            title={languages[language]?.title || ''}
            content={languages[language]?.content || ''}
            language={language}
          />
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
