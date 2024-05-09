import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`)
})
