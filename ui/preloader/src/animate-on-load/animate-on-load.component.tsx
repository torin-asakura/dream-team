import styled                 from '@emotion/styled'

import React                  from 'react'
import { FC }                 from 'react'
import { PropsWithChildren }  from 'react'
import { motion }             from 'framer-motion'
import { useAnimation }       from 'framer-motion'
import { useMemo }            from 'react'
import { useEffect }          from 'react'

import { AnimateOnLoadProps } from './animate-on-load.interfaces'
import { usePreloader }       from '../context'

export const AnimateOnLoad: FC<PropsWithChildren<AnimateOnLoadProps>> = ({
  animation,
  initial,
  transition,
  delay,
  style,
  children,
}) => {
  const { addListener, done } = usePreloader()
  const controls = useAnimation()

  const Motion = useMemo(
    () =>
      styled(motion.div)({
        display: 'flex',
        boxSizing: 'border-box',
        ...(style || {}),
      }),
    // eslint-disable-next-line
    []
  )

  useEffect(() => {
    if (!done) {
      controls.set(initial)

      const listener = () => {
        setTimeout(() => {
          controls.start(animation)
        }, delay)
      }

      addListener(listener)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Motion animate={controls} transition={transition}>
      {children}
    </Motion>
  )
}
