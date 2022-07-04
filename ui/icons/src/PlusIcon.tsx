import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'
export const PlusIcon = (props: any) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.9999 0.175049C8.45554 0.175049 8.8249 0.544414 8.8249 1.00005V7.17505H14.9998C15.4554 7.17505 15.8248 7.54441 15.8248 8.00005C15.8248 8.45568 15.4554 8.82505 14.9998 8.82505H8.8249V15C8.8249 15.4557 8.45554 15.825 7.9999 15.825C7.54427 15.825 7.1749 15.4557 7.1749 15V8.82505L0.999805 8.82505C0.54417 8.82505 0.174805 8.45568 0.174805 8.00005C0.174805 7.54441 0.54417 7.17505 0.999805 7.17505H7.1749V1.00005C7.1749 0.544414 7.54427 0.175049 7.9999 0.175049Z'
        fill='#3F87F9'
      />
    </svg>
  )
}
