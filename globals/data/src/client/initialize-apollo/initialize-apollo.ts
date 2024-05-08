import { NormalizedCacheObject } from '@apollo/client'
import { ApolloClient }          from '@apollo/client'

import merge                     from 'deepmerge'
import isEqual                   from 'lodash/isEqual'

import { InitializeApollo }      from './initialize-apollo.interfaces'
import { createApolloClient }    from '../create-apollo-client'

let apolloClient: ApolloClient<NormalizedCacheObject>

export const initializeApollo: InitializeApollo = ({ initialState = null, cookie = {} }) => {
  const userApolloClient = apolloClient ?? createApolloClient(cookie)

  if (initialState) {
    const existingCache = userApolloClient.extract()
    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    })
    userApolloClient.cache.restore(data)
  }

  if (!apolloClient) apolloClient = userApolloClient

  return userApolloClient
}
