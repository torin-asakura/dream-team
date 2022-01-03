/* eslint-disable react-hooks/rules-of-hooks */

import React            from 'react'
import { FC }           from 'react'
import { useEffect }    from 'react'
import { useCallback }  from 'react'
import ScrollLock       from 'react-scrolllock'
import { createPortal } from 'react-dom'
import document         from 'global/document'
import { nanoid }       from 'nanoid'
import { useAnimation } from 'framer-motion'

import { Box }          from '@ui/layout'
import { CrossIcon }    from '@ui/icons'

import { Container }    from './container'
import { LayerProps }   from './layer.interface'

export const Layer: FC<LayerProps> = ({
  children,
  visible,
  onClose,
  scroll = false,
  opacity = 'none',
  center = false,
  top = 0,
  left = 0,
  ...props
}) => {
  const blackoutId = nanoid()
  const childrenId = nanoid()
  const main = useAnimation()

  const close = useCallback(() => {
    main
      .start({
        opacity: 0,
      })
      .then(onClose)
  }, [main, onClose])

  const handleClick = useCallback(
    (event) => {
      if (
        event.target.contains(document.getElementById(blackoutId)) ||
        event.target === document.getElementById(blackoutId)
      )
        close()
    },
    [blackoutId, close]
  )

  document.addEventListener('click', handleClick)

  useEffect(() => {
    main.start({
      opacity: 1,
    })

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick, main])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  })

  if (visible) {
    return createPortal(
      <ScrollLock>
        <Container
          animate={main}
          initial={{ opacity: 0 }}
          scroll={scroll}
          opacity={opacity}
          id={blackoutId}
          justifyContent='center'
          alignItems='center'
          backgroundColor={['white', 'white', 'rgba(0, 0, 0, 0.4)']}
          {...props}
        >
          <Box position='absolute' top='20px' left='20px' display={['flex', 'flex', 'none']}>
            <CrossIcon width={16} height={16} cursor='pointer' onClick={close} />
          </Box>
          <Box
            id={childrenId}
            width={['100%', '100%', 'auto']}
            height={['100%', '100%', 'auto']}
            justifyContent={['center', 'center', 'auto']}
            alignItems={['center', 'center', 'auto']}
          >
            {children}
          </Box>
        </Container>
      </ScrollLock>,
      document.body
    )
  }
  return null
}
