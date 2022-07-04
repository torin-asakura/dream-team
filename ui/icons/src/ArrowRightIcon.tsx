import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'
export const ArrowRightIcon = (props: any) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 10 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 1L9 9L1 17'
        stroke={props.color || '#172E47'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
