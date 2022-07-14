import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Sphere }    from '@ui/sphere'

import { Content }   from './content'
import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'

const LandingHero: FC<HeroProps> = ({ language }) => {
  const { ...languages } = useData()

  return (
    <Box
      height={['auto', 'auto', '92vh']}
      minHeight={['92vh', '92vh', 'auto']}
      width='100%'
      overflow='hidden'
      backgroundColor='background.hero'
    >
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout flexDirection={['column', 'column', 'row-reverse']} alignItems='center'>
          <Layout width={600} height={600}>
            <Sphere />
          </Layout>
          <Layout marginRight='120px' />
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
