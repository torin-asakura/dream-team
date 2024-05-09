import { ApolloClient }          from '@apollo/client'
import { NormalizedCacheObject } from '@apollo/client'

export type UseApollo = <T extends { props?: Record<string, any> }>(
  pageProps: T
) => ApolloClient<NormalizedCacheObject>
