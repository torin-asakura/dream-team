import React                      from 'react'
import { FastAverageColor }       from 'fast-average-color'
import { FastAverageColorResult } from 'fast-average-color'
import { FC }                     from 'react'
import { useEffect }              from 'react'
import { useState }               from 'react'

import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Box }                    from '@ui/layout'
import { AnimateOnLoad }          from '@ui/preloader'
import { extractObject }          from '@globals/data'

import { Content }                from './content'
import { CDN_VIDEO_MINE }         from './landing-hero.constants'
import { FAST_BLACK_COLOR_RGBA }  from './landing-hero.constants'
import { CDN_VIDEO_PATH }         from './landing-hero.constants'
import { HeroProps }              from './landing-hero.interface'
import { Video }                  from './video'
import { useHero }                from './data'

const fac = new FastAverageColor()

const LandingHero: FC<HeroProps> = ({ language }) => {
  const { heroData } = useHero()

  const [backgroundColor, setBackgroundColor] = useState<string>('background.purple')
  const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false)

  const { title, content } = extractObject('contentAddons', 'lead', heroData[language])

  useEffect(() => {
    if (!videoIsPlaying) return

    const videoElement = document.querySelector('video')

    const getColor = () =>
      setTimeout(() => {
        try {
          let colorValue = FAST_BLACK_COLOR_RGBA
          let color: FastAverageColorResult | undefined

          do {
            color = fac.getColor(videoElement, { algorithm: 'dominant' })
            colorValue = color.value
          } while (colorValue.every((item) => item === 0))

          setBackgroundColor(color.rgb)
        } catch (error) {
          if (process.env.NODE_ENV !== 'production') throw error
        }
      }, 7000)

    getColor()
  }, [videoIsPlaying])


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
            <Video
              mimeType={CDN_VIDEO_MINE}
              src={CDN_VIDEO_PATH}
              onPlay={() => setVideoIsPlaying(true)}
            />
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
