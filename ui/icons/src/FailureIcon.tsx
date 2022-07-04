import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'
export const FailureIcon = (props: any) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width={120} height={120} rx={60} fill='url(#paint0_linear)' />
      <circle cx={60} cy={60} r={32} fill='white' />
      <path
        d='M50 50L70 70M70 50L50 70'
        stroke='url(#paint1_linear)'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1={60.0003}
          y1={-9.26054}
          x2={60.0003}
          y2={106.495}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF6D2F' />
          <stop offset={1} stopColor='#F03970' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1={60}
          y1={48.4566}
          x2={60}
          y2={67.7492}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF6D2F' />
          <stop offset={1} stopColor='#F03970' />
        </linearGradient>
      </defs>
    </svg>
  )
}
