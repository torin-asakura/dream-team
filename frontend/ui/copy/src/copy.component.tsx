import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Condition }       from '@ui/condition'
import { Button }          from '@ui/button'
import { CopyIcon }        from '@ui/icons'
import { CopySuccessIcon } from '@ui/icons'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'

import { CopyProps }       from './copy.interface'
import { copy }            from './copy.helper'

const Copy: FC<CopyProps> = ({ content }) => {
  const [success, setSuccess] = useState<boolean>(false)

  if (success) setTimeout(() => setSuccess(false), 3000)

  return (
    <Box width={40} height={40}>
      <Button
        width='100%'
        // @ts-ignore
        height='100%'
        colors='clipboard'
        px={0}
        onClick={() => {
          copy(content)
          setSuccess(true)
        }}
      >
        <Layout>
          <Condition match={!success}>
            <CopyIcon width={15} height={18} />
          </Condition>
          <Condition match={success}>
            <CopySuccessIcon width={15} height={18} />
          </Condition>
        </Layout>
      </Button>
    </Box>
  )
}

export { Copy }
