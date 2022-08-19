import { useContext }                   from 'react'

import { LocomotiveScrollContext }      from './locomotive-scroll.context'
import { LocomotiveScrollContextValue } from './locomotive-scroll.context'

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  const context = useContext(LocomotiveScrollContext)

  return context
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll'
