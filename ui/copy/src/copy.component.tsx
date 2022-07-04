import React               from 'react'
import { FC }              from 'react'
import { motion }          from 'framer-motion'
import { useState }        from 'react'

import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'

import { CopySuccessIcon } from './copy-success.icon'
import { CopyIcon }        from './copy.icon'
import { CopyProps }       from './copy.interface'
import { copy }            from './copy.helper'

const Copy: FC<CopyProps> = ({ content }) => {
  const [success, setSuccess] = useState<boolean>(false)

  if (success) setTimeout(() => setSuccess(false), 3000)

  return (
    <Box width={40} height={40}>
      <Button
        width='100%'
        colors='clipboard'
        px={0}
        height='100%'
        onClick={() => {
          copy(content)
          setSuccess(true)
        }}
      >
        <Layout>
          <Condition match={!success}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <CopyIcon />
            </motion.div>
          </Condition>
          <Condition match={success}>
            <CopySuccessIcon />
          </Condition>
        </Layout>
      </Button>
    </Box>
  )
}

export { Copy }
