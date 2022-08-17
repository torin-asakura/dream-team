import React                       from 'react'
import useResizeObserver           from 'use-resize-observer'
import { LocomotiveScrollOptions } from 'locomotive-scroll'
import { Scroll }                  from 'locomotive-scroll'
import { DependencyList }          from 'react'
import { MutableRefObject }        from 'react'
import { PropsWithChildren }       from 'react'
import { useMemo }                 from 'react'
import { createContext }           from 'react'
import { useEffect }               from 'react'
import { useRef }                  from 'react'
import { useState }                from 'react'
import { useDebounce }             from 'use-debounce'

export interface LocomotiveScrollContextValue {
  scroll: Scroll | null
  isReady: boolean
}

export const LocomotiveScrollContext = createContext<LocomotiveScrollContextValue>({
  scroll: null,
  isReady: false,
})

export interface LocomotiveScrollProviderProps {
  options: LocomotiveScrollOptions
  containerRef: MutableRefObject<HTMLDivElement | null>
  watch: DependencyList | undefined
  onUpdate?: (scroll: Scroll) => void
  location?: string
  onLocationChange?: (scroll: Scroll) => void
}

export const LocomotiveScrollProvider = ({
  children,
  options,
  containerRef,
  watch,
  onUpdate,
  location,
  onLocationChange,
}: PropsWithChildren<LocomotiveScrollProviderProps>) => {
  const { height: containerHeight } = useResizeObserver<HTMLDivElement>({ ref: containerRef })
  const [isReady, setIsReady] = useState(false)
  const LocomotiveScrollRef = useRef<Scroll | null>(null)
  const [height] = useDebounce(containerHeight, 100)

  useEffect(() => {
    ;(async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const dataScrollContainer = document.querySelector('[data-scroll-container]')

        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: dataScrollContainer ?? undefined,
          ...options,
        })

        setIsReady(true) // Re-render the context
      } catch (error) {
        throw Error(`react-locomotive-scroll: ${error}`)
      }
    })()

    return () => {
      LocomotiveScrollRef.current?.destroy()
      setIsReady(false)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(
    () => {
      if (!LocomotiveScrollRef.current) {
        return
      }

      LocomotiveScrollRef.current.update()

      if (onUpdate) {
        onUpdate(LocomotiveScrollRef.current)
      }
    },
    // eslint-disable-next-line
    watch ? [...watch, height] : [height]
  )

  useEffect(() => {
    if (!LocomotiveScrollRef.current || !location) {
      return
    }

    LocomotiveScrollRef.current.update()

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current)
    }
    // eslint-disable-next-line
  }, [location])

  const contextValue = useMemo(
    () => ({ scroll: LocomotiveScrollRef.current, isReady }),
    [LocomotiveScrollRef, isReady]
  )

  return (
    <LocomotiveScrollContext.Provider value={contextValue}>
      {children}
    </LocomotiveScrollContext.Provider>
  )
}

LocomotiveScrollContext.displayName = 'LocomotiveScrollContext'
LocomotiveScrollProvider.displayName = 'LocomotiveScrollProvider'
