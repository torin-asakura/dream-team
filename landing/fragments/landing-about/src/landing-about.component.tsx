import React                     from 'react'
import { FC }                    from 'react'

import { LandingWorkDirections } from '@landing/work-directions-fragment'
import { Condition }             from '@ui/condition'
import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'

import { Item }                  from './item'
import { LandingAboutProps }     from './landing-about.interface'
import { useAbout }              from './data'
import { splitItems }            from './helpers'

const LandingAbout: FC<LandingAboutProps> = ({ language }) => {
  const { aboutData } = useAbout()
  const [topSide, bottomSide] = splitItems(aboutData[language])
  return (
    <Box px={['20px', '20px', '0px']}>
      <Column
        width='100%'
        height={['auto', 'auto', '100%']}
        justifyContent='center'
        alignItems='center'
      >
        <Layout width='100%' maxWidth={1280}>
          <Column width='100%' height={['auto', 'auto', '100%']}>
            <Layout flexBasis={[64, 64, 160]} />
            {topSide.reverse().map((
              { contentAddons: { title, content, excerpt, image } },
              index
            ) => (
              <React.Fragment key={title}>
                <Condition match={index !== 0}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
                <Item
                  title={title}
                  content={content}
                  excerpt={excerpt}
                  image={image.node}
                  index={index}
                />
                <Condition match={index !== topSide.length - 1}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
              </React.Fragment>
            ))}
            <Layout flexBasis={[64, 64, 160]} />
            <LandingWorkDirections language={language} />
            <Layout flexBasis={[64, 64, 160]} />
            {bottomSide.reverse().map((
              { contentAddons: { title, content, excerpt, image } },
              index
            ) => (
              <React.Fragment key={title}>
                <Condition match={index !== 0}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
                <Item
                  title={title}
                  content={content}
                  excerpt={excerpt}
                  image={image.node}
                  index={index}
                />
                <Condition match={index !== bottomSide.length - 1}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
              </React.Fragment>
            ))}
            <Layout flexBasis={[52, 52, 152]} />
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingAbout }
