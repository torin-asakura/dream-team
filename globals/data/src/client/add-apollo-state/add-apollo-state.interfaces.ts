import { ApolloClient }          from '@apollo/client'
import { NormalizedCacheObject } from '@apollo/client'

export type AddApolloState = <T extends { props?: Record<string, any> }>(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: T
) => T
