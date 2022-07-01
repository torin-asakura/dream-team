import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useRef }                   from 'react'

import { Text }                     from '@ui/text'

import { InputProps }               from './input.interfaces'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'
import { transitionStyles }         from './input.styles'

export const InputElement = styled.div<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  transitionStyles
)

const Container = styled.div(({ type }: any) => ({
  display: type === 'hidden' ? 'none' : 'flex',
  width: '100%',
  flexDirection: 'column',
}))

const Layout = styled.div(({ flexBasis }: any) => ({
  display: 'flex',
  flexBasis,
}))

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, type, disabled, errorText = '', onChange, onChangeNative, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  if (!ref) {
    // eslint-disable-next-line
    ref = useRef(null)
  }

  return (
    <Container type={type} onClick={() => (ref as any).current.focus()}>
      <InputElement {...props} size={size} error={errorText !== ''}>
        <RawInput
          ref={ref}
          type={type}
          disabled={disabled}
          value={value}
          onChange={changeValue}
          {...props}
        />
      </InputElement>
      <Layout flexBasis={5} />
      <Text color='input.error'>{errorText}</Text>
    </Container>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
