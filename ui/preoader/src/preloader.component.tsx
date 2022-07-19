import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { useState }        from 'react'
import { useEffect }       from 'react'

import { Condition }       from '@ui/condition'
import { Layout }          from '@ui/layout'

import { Container }       from './container'
import { Provider }        from './context'
import { Listener }        from './context'
import { Logo }            from './logo'
import { Progress }        from './progress'

let listeners: Array<Listener> = []

export const Preloader = ({ children }) => {
  const [progress, setProgress] = useState(0)

  const addListener = (listener: Listener) => {
    listeners.push(listener)
  }

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 5)
      }, 100)
    }
  }, [progress])

  return (
    <Provider value={{ addListener, done: progress >= 100 }}>
      <AnimatePresence>
        {progress < 100 && (
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
    </Provider>
  )
}
