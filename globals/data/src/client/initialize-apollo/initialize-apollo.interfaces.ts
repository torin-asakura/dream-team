import { ApolloClient }          from '@apollo/client'
import { NormalizedCacheObject } from '@apollo/client'

export interface InitializeApolloProps {
  initialState?: Record<string, any> | null
  cookie?: Record<string, any>
}

export type InitializeApollo = (props: InitializeApolloProps) => ApolloClient<NormalizedCacheObject>
