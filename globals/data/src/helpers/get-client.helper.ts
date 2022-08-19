import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: 'https://wp.dream-team.tech/graphql',
    cache: new InMemoryCache(),
  })
