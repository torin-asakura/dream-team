import React             from 'react'
import { FC }            from 'react'

import { Image }         from '@ui/image'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { extractObject } from '@globals/data'

import { Content }       from './content'
import { HeroProps }     from './landing-hero.interface'

const LandingHero: FC<HeroProps> = ({ language, data }) => {
  const obj = extractObject('contentAddons', 'lead', data[language])

  const { title } = obj
  const { content } = obj
  const imageAltText = obj.image.altText
  const imageUrl = obj.image.sourceUrl

  return (
    <Box
      height={['auto', 'auto', '100vh']}
      width='100%'
      overflow='hidden'
      backgroundColor='background.hero'
    >
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout flexBasis={[72, 72, 0]} />
        <Layout flexDirection={['column', 'column', 'row-reverse']} alignItems='center'>
          <AnimateOnLoad
            initial={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1 }}
            animation={{ y: 0, opacity: 1 }}
            delay={600}
          >
            <Layout display={['none', 'none', 'flex']}>
              <Image width={600} height={600} alt={imageAltText} src={imageUrl} />
            </Layout>
          </AnimateOnLoad>
          <Layout width={300} height={300} display={['flex', 'flex', 'none']}>
            <Image width={300} height={300} alt={imageAltText} src={imageUrl} />
          </Layout>
          <Layout marginRight='120px' />
          <Layout display={['flex', 'flex', 'none']} height={80} />
          <AnimateOnLoad
            initial={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1 }}
            animation={{ y: 0, opacity: 1 }}
          >
            <Content title={title} content={content} language={language} />
          </AnimateOnLoad>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
