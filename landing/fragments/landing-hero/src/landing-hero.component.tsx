import React                  from 'react'
import { FC }                 from 'react'

import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { Box }                from '@ui/layout'
import { AnimateOnLoad }      from '@ui/preloader'
import { Sphere }             from '@ui/sphere'

import { VIDEO_DESKTOP }      from './landing-hero.constants'
import { HeroProps }          from './landing-hero.interface'
import { Video }              from './video'
import { useGetAssetById }    from './data'
import { sphereStyleDesktop } from './landing-hero.constants'
import { sphereStyleMobile }  from './landing-hero.constants'

const LandingHero: FC<HeroProps> = () => {
  const { mediaItem } = useGetAssetById(VIDEO_DESKTOP)

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
              <Sphere style={sphereStyleDesktop} />
            </Layout>
          </AnimateOnLoad>
          <Layout width={300} height={300} display={['flex', 'flex', 'none']}>
            <Sphere style={sphereStyleMobile} />
          </Layout>
          <Layout marginRight='120px' />
          <Layout display={['flex', 'flex', 'none']} height={80} />
          <AnimateOnLoad
            initial={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1 }}
            animation={{ y: 0, opacity: 1 }}
            delay={600}
          >
            <Layout display={['none', 'none', 'flex']}>
              <Video src={mediaItem?.mediaItemUrl} mimeType={mediaItem?.mimeType} />
            </Layout>
          </AnimateOnLoad>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
