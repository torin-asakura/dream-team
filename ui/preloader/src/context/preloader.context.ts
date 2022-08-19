/* eslint-disable prefer-destructuring */

import { createContext } from 'react'
import { useContext }    from 'react'

export type Listener = () => any
export interface ContextValue {
  addListener: (listener: Listener) => any
  done: boolean
}

const doNothing = (...args) => {
  // do nothing
}

export const Context = createContext<ContextValue>({ addListener: doNothing, done: false })

export const Provider = Context.Provider
export const Consumer = Context.Consumer

export const usePreloader = () => useContext(Context)
