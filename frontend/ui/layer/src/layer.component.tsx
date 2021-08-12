/* eslint-disable react-hooks/rules-of-hooks */

import React            from 'react'
import ScrollLock       from 'react-scrolllock'
import { FC }           from 'react'
import { createPortal } from 'react-dom'
import document         from 'global/document'

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
  if (visible) {
    return createPortal(
      <ScrollLock>
        <Container
          scroll={scroll}
          opacity={opacity}
          justifyContent='center'
          alignItems='center'
          onClick={onClose}
          {...props}
        >
          {children}
        </Container>
      </ScrollLock>,
      document.body
    )
  }
  return null
}
