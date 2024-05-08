import { ApolloClient }       from '@apollo/client'
import { InMemoryCache }      from '@apollo/client'
import { from }               from '@apollo/client'
import { concatPagination }   from '@apollo/client/utilities'

import { IS_SERVER }          from '../client.constants'
import { WP_URI }             from '../client.constants'
import { CreateApolloClient } from './create-apollo-client.interfaces'
import { errorLink }          from '../error-link'
import { getHttpLink }        from '../get-http-link'

export const createApolloClient: CreateApolloClient = (cookie) =>
  new ApolloClient({
    ssrMode: IS_SERVER,
    uri: WP_URI,
    link: IS_SERVER ? from([errorLink, getHttpLink(cookie ?? {})]) : undefined,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
