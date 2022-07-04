import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'

export const SuccessIcon = (props: any) => {
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
      <rect width={120} height={120} rx={60} fill='#0F4C8B' fillOpacity={0.05} />
      <rect width={120} height={120} rx={60} fill='url(#paint0_linear)' />
      <circle cx={60} cy={60} r={32} fill='white' />
      <path
        d='M45 61L55 71L75 51'
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
          <stop stopColor='#2F9BFF' />
          <stop offset={1} stopColor='#5E39F0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1={60.0001}
          y1={49.4566}
          x2={60.0001}
          y2={68.7492}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2F9BFF' />
          <stop offset={1} stopColor='#5E39F0' />
        </linearGradient>
      </defs>
    </svg>
  )
}
