import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'
export const VkIcon = (props: any) => {
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
        d='M22.0183 7.32948C22.1636 6.85174 22.0183 6.5 21.3227 6.5H19.0259C18.4414 6.5 18.1719 6.80362 18.0258 7.13874C18.0258 7.13874 16.8577 9.93518 15.2031 11.7516C14.6676 12.2784 14.4244 12.4455 14.1321 12.4455C13.986 12.4455 13.7664 12.2784 13.7664 11.7998V7.32948C13.7664 6.75549 13.6054 6.5 13.1189 6.5H9.50696C9.14209 6.5 8.92247 6.76599 8.92247 7.01886C8.92247 7.56223 9.7502 7.68823 9.83508 9.21769V12.5409C9.83508 13.2697 9.7012 13.4019 9.40896 13.4019C8.63023 13.4019 6.73589 10.5923 5.61154 7.37761C5.39367 6.75199 5.17317 6.5 4.58606 6.5H2.28748C1.63125 6.5 1.5 6.80362 1.5 7.13874C1.5 7.73547 2.27873 10.6999 5.1268 14.6207C7.02551 17.2982 9.69858 18.7497 12.1337 18.7497C13.594 18.7497 13.7742 18.4278 13.7742 17.8721V15.8483C13.7742 15.2034 13.9125 15.0748 14.3754 15.0748C14.7166 15.0748 15.3002 15.2428 16.6634 16.5334C18.2209 18.0638 18.4773 18.7497 19.354 18.7497H21.6508C22.3071 18.7497 22.6361 18.4278 22.4471 17.7908C22.2388 17.1573 21.4951 16.2377 20.509 15.1466C19.9735 14.5253 19.1703 13.856 18.9261 13.5209C18.5858 13.0912 18.6829 12.8996 18.9261 12.5173C18.9261 12.5173 21.7261 8.64458 22.0174 7.32948H22.0183Z'
        fill={props.color || '#0077FF'}
      />
    </svg>
  )
}
