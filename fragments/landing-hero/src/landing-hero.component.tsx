import React         from 'react'
import { FC }        from 'react'

import { Image }     from '@ui/image'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { Content }   from './content'
import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'

const LandingHero: FC<HeroProps> = ({ language }) => {
  const { sphereUrl, ...languages } = useData()

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
          <Layout display={['none', 'none', 'flex']}>
            <Image width={600} height={600} alt='sphere' src={sphereUrl} />
          </Layout>
          <Layout width={300} height={300} display={['flex', 'flex', 'none']}>
            <Image width={300} height={300} alt='sphere' src={sphereUrl} />
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
