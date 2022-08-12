import React                     from 'react'
import { FC }                    from 'react'

import { LandingWorkDirections } from '@fragments/landing-work-directions'
import { Condition }             from '@ui/condition'
import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { extractObjects }        from '@globals/data'

import { Item }                  from './item'
import { LandingAboutProps }     from './landing-about.interface'

const LandingAbout: FC<LandingAboutProps> = ({ language, data }) => {
  const fragments = extractObjects('lead', 'contentAddons', data[language])

  const topSide = fragments.filter(({ contentAddons }) => contentAddons.order < 3)
  const bottomSide = fragments.filter(({ contentAddons }) => contentAddons.order > 2)

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
              <>
                <Condition match={index !== 0}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
                <Item
                  title={title}
                  content={content}
                  excerpt={excerpt}
                  image={image}
                  index={index}
                />
                <Condition match={index !== topSide.length - 1}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
              </>
            ))}
            <Layout flexBasis={[64, 64, 160]} />
            <LandingWorkDirections language={language} />
            <Layout flexBasis={[64, 64, 160]} />
            {bottomSide.reverse().map((
              { contentAddons: { title, content, excerpt, image } },
              index
            ) => (
              <>
                <Condition match={index !== 0}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
                <Item
                  title={title}
                  content={content}
                  excerpt={excerpt}
                  image={image}
                  index={index}
                />
                <Condition match={index !== bottomSide.length - 1}>
                  <Layout flexBasis={[32, 32, 80]} />
                </Condition>
              </>
            ))}
            <Layout flexBasis={[52, 52, 152]} />
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingAbout }
