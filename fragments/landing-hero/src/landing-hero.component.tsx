import React         from 'react'
import dynamic       from 'next/dynamic'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { Content }   from './content'
import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'

const Sphere = dynamic(() => import('@ui/sphere'), {
  ssr: false,
})

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
        <Layout flexDirection={['column', 'column', 'row-reverse']}>
          <Layout>
            <Sphere />
          </Layout>
          <Layout flexBasis={[200, 200, 0]} marginRight='120px' />
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
