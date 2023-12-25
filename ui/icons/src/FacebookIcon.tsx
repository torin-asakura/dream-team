import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'
export const FacebookIcon = (props: any) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7143 22.4305C18.9413 21.8286 23 17.3883 23 12C23 6.20101 18.299 1.5 12.5 1.5C6.70101 1.5 2 6.20101 2 12C2 17.1778 5.74776 21.4802 10.6786 22.3426V14.6271H8.25V11.5847H10.6786V9.75932C10.6786 7.25301 12.0902 5.5 14.3214 5.5H16.75V8.54237H15.5357C14.3226 8.54237 13.7143 9.15084 13.7143 10.3678V11.5847H16.75L16.1429 14.6271H13.7143V22.4305Z'
        fill={props.color || '#0374F9'}
      />
    </svg>
  )
}
