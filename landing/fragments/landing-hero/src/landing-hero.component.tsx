import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'

import { Condition }           from '@ui/condition'
import { Image }               from '@ui/image'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { AnimateOnLoad }       from '@ui/preloader'
import { extractObject }       from '@globals/data'

import { Content }             from './content'
import { HeroProps }           from './landing-hero.interface'
import { Sphere }              from './sphere/sphere.component'
import { useHero }             from './data'
import { defineSafariBrowser } from './helpers'

const LandingHero: FC<HeroProps> = ({ language }) => {

  const isSafari = defineSafariBrowser()

  const { heroData } = useHero()

  const [backgroundColor, setBackgroundColor] = useState<string>('background.purple')

  const { title, content } = extractObject('contentAddons', 'lead', heroData[language])

  return (
    <Box
      height={['auto', 'auto', '100vh']}
      width='100%'
      overflow='hidden'
      backgroundColor={backgroundColor || 'background.purple'}
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
            <Condition match={!isSafari}>
              <Sphere setBackgroundColor={setBackgroundColor} />
            </Condition>
            <Condition match={isSafari}>
              <Layout>
                <Image src='/sphere.svg' width={630} height={630} />
              </Layout>
            </Condition>
          </AnimateOnLoad>
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
