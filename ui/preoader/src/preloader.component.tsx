import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { useState }        from 'react'

import { Condition }       from '@ui/condition'
import { Layout }          from '@ui/layout'

import { Container }       from './container'
import { Logo }            from './logo'
import { Progress }        from './progress'

export const Preloader = ({ children }) => {
  const [progress, setProgress] = useState(0)

  if (progress !== 100) {
    setTimeout(() => {
      setProgress(progress + 3)
    }, 100)
  }

  return (
    <>
      <AnimatePresence>
        {progress < 100 && (
          <Container
            key='main'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Condition match={progress < 100}>
              <Logo />
            </Condition>
            <Layout flexBasis={56} flexShrink={0} />
            <Condition match={progress < 100}>
              <Progress progress={progress} />
            </Condition>
          </Container>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}
