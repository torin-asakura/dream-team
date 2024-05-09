import { HttpLink }    from '@apollo/client'

import { WP_URI }      from '../client.constants'
import { GetHttpLink } from './get-http-link.interfaces'

export const getHttpLink: GetHttpLink = (cookies) =>
  new HttpLink({
    uri: WP_URI,
    headers: {
      cookie: Object.entries(cookies)
        .map(([key, value]) => `${key}=${value}`)
        .join('; '),
    },
  })
