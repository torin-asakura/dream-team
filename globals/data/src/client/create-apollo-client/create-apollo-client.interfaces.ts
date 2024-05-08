import { ApolloClient }          from '@apollo/client'
import { NormalizedCacheObject } from '@apollo/client'

export type CreateApolloClient = (
  cookie?: Record<string, any>
) => ApolloClient<NormalizedCacheObject>
