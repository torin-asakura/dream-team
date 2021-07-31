import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'

import { HeroProps } from './landing-hero.interface'
import { useData }   from './data'

const LandingHero: FC<HeroProps> = ({ language }) => {
  const [EN, RU] = useData()

  return (
    <Box px={['32px', '32px', '0px']} height={903} border='1px solid blue'>
      <Column width='100%' alignItems='center' justifyContent='center'>
        <Layout width='100%' maxWidth={1280}>
          <Row>
            <Column width='100%' alignItems='flex-start'>
              <Box height={90} width={90} border='1px solid black'>
                <Column>
                  <Condition match={language === 'RU'}>
                    {RU?.title}
                    <br />
                    {RU?.content}
                  </Condition>
                  <Condition match={language === 'EN'}>
                    {EN?.title}
                    <br />
                    {EN?.content}
                  </Condition>
                  <button type='button'>Оставить заявку</button>
                </Column>
              </Box>
            </Column>
          </Row>
        </Layout>
      </Column>
    </Box>
  )
}

export { LandingHero }
