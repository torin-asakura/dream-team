import React                from 'react'
import { FastAverageColor } from 'fast-average-color'
import { FC }               from 'react'
import { useEffect }        from 'react'
import { useState }         from 'react'

import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { extractObject } from '@globals/data'

import { Content }   from './content'
import { HeroProps } from './landing-hero.interface'
import { Video }     from './video'

const fac = new FastAverageColor()

const LandingHero: FC<HeroProps> = ({ data, language }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('')
  const { title, content } = extractObject('contentAddons', 'lead', data[language])
  const [canPlay, setCanPlay] = useState(false)


  useEffect(() => {
    if (!canPlay) return

    const videoElement = document.querySelector('video')

    const getColor = () => setTimeout(async () => {
      try {
        let colorValue = [0,0,0,0]
        let color

        while (colorValue.every(item => item === 0)) {
          color = await fac.getColorAsync(videoElement, {
            algorithm: 'dominant',
            ignoredColor: [[0, 0, 0, 0], [0, 0, 0]],
          })
          colorValue = color.value
        }

        setBackgroundColor(color.rgb)
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') throw error
      }
    }, 500)

    getColor()
  }, [canPlay])

  return (
    <Box
      height={['auto', 'auto', '100vh']}
      width="100%"
      overflow="hidden"
      backgroundColor={backgroundColor || 'background.hero'}
    >
      <Column width="100%" alignItems="center" justifyContent="center">
        <Layout flexBasis={[72, 72, 0]}/>
        <Layout flexDirection={['column', 'column', 'row-reverse']} alignItems="center">
          <AnimateOnLoad
            initial={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1 }}
            animation={{ y: 0, opacity: 1 }}
            delay={600}
          >
            <Video callback={() => setCanPlay(true)}/>
          </AnimateOnLoad>
          <Layout marginRight="120px"/>
          <Layout display={['flex', 'flex', 'none']} height={80}/>
          <AnimateOnLoad
            initial={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1 }}
            animation={{ y: 0, opacity: 1 }}
          >
            <Content title={title} content={content} language={language}/>
          </AnimateOnLoad>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
