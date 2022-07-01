import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'

export const CrossIcon = (props: any) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 1L9 9M17 17L9 9M17 1L9 9M1 17L9 9'
        stroke={props.color || '#9AA8B8'}
        strokeWidth={1.25}
      />
    </svg>
  )
}
