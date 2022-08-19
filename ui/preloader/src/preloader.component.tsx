import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { useState }        from 'react'

import { Condition }       from '@ui/condition'
import { Layout }          from '@ui/layout'

import { Container }       from './container'
import { Provider }        from './context'
import { Listener }        from './context'
import { Logo }            from './logo'
import { Progress }        from './progress'

let listeners: Array<Listener> = []

export const Preloader = ({ children, seconds = 4 }) => {
  const [done, setDone] = useState(false)

  const addListener = (listener: Listener) => {
    listeners.push(listener)
  }

  return (
    <Provider value={{ addListener, done }}>
      <AnimatePresence>
        {!done && (
          <Container
            key='main'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            onAnimationComplete={() => {
              listeners.forEach((listener) => listener())

              listeners = []
            }}
          >
            <Condition match={!done}>
              <Logo />
            </Condition>
            <Layout flexBasis={56} flexShrink={0} />
            <Condition match={!done}>
              <Progress seconds={seconds} onAnimationComplete={() => setDone(true)} />
            </Condition>
          </Container>
        )}
      </AnimatePresence>
      {children}
    </Provider>
  )
}
