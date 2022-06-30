import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { Content }   from './content'
import { HeroProps } from './landing-hero.interface'
import { Video }     from './video'
import { useData }   from './data'

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
        <Layout flexDirection={['column', 'column', 'row-reverse']}>
          <Layout>
            <Video src={Desktop?.mediaItemUrl} mimeType={Desktop?.mimeType} />
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
