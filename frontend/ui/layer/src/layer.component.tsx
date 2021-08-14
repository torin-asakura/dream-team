/* eslint-disable react-hooks/rules-of-hooks */

import React            from 'react'
import { FC }           from 'react'
import { useEffect }    from 'react'
import ScrollLock       from 'react-scrolllock'
import { createPortal } from 'react-dom'
import document         from 'global/document'
import { nanoid }       from 'nanoid'

import { Box }          from '@ui/layout'

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

  const handleClick = (event) => {
    if (
      event.target.contains(document.getElementById(blackoutId)) ||
      event.target === document.getElementById(blackoutId)
    ) {
      onClose()
    }
  }

  document.addEventListener('click', handleClick)

  useEffect(() => () => document.removeEventListener('click', handleClick), [handleClick])

  if (visible) {
    return createPortal(
      <ScrollLock>
        <Container
          scroll={scroll}
          opacity={opacity}
          justifyContent='center'
          alignItems='center'
          id={blackoutId}
          {...props}
        >
          <Box id={childrenId}>{children}</Box>
        </Container>
      </ScrollLock>,
      document.body
    )
  }
  return null
}
