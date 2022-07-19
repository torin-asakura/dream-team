import { AnimationOptions } from 'framer-motion'
import { MotionStyle }      from 'framer-motion'
import { Transition }       from 'framer-motion'
import { CSSProperties }    from 'react'

type StyleFunc = (theme: any) => CSSProperties

export interface AnimateOnLoadProps {
  animation: MotionStyle & AnimationOptions<any> & any
  initial: MotionStyle & any
  transition: Transition
  delay?: number
  style?: CSSProperties | StyleFunc
}
