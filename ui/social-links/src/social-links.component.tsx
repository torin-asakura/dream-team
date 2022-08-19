import React                 from 'react'
import { FC }                from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { TelegramIcon }      from '@ui/icons'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Link }              from '@ui/link'
import { Text }              from '@ui/text'
import { extractObject }     from '@globals/data'
import { useHover }          from '@ui/utils'

import { SocialLinksProps }  from './social-links.interface'
import { useSocialNetworks } from './data'
import { messages }          from './messages'

const SocialLinks: FC<SocialLinksProps> = ({ language, contacts = false }) => {
  const [hoverTelegram, hoverTelegramProps] = useHover()

  const { data } = useSocialNetworks()

  const telegram = extractObject('contentAddons', 'telegram', data)

  return (
    <Row
      justifyContent={[
        contacts ? 'flex-start' : 'center',
        contacts ? 'flex-start' : 'center',
        'flex-start',
      ]}
      alignItems='center'
    >
      <Layout display={['none', 'none', 'flex']}>
        <Text fontSize='regular' lineHeight='small' color='text.lightGray'>
          {messages.social[language]}
        </Text>
      </Layout>
      <Condition match={contacts}>
        <Layout display={['flex', 'flex', 'none']}>
          <Text fontSize='regular' lineHeight='small' color='text.lightGray'>
            {messages.social[language]}
          </Text>
        </Layout>
      </Condition>
      <Layout flexBasis={24} />
      <Layout {...hoverTelegramProps}>
        <Link href={telegram?.content} target='_blank' title={telegram?.title}>
          <Button colors='social' size='rounded'>
            <TelegramIcon color={hoverTelegram ? 'white' : ''} width={24} height={24} />
          </Button>
        </Link>
      </Layout>
    </Row>
  )
}

export { SocialLinks }
