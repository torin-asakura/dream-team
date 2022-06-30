import { ApolloProvider } from '@apollo/client'
import { ApolloClient }   from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'
import { withHelmet }     from '@atls/next-app-with-helmet'

import App                from 'next/app'
import React              from 'react'
import compose            from 'recompose/compose'

import { ThemeProvider }  from '@ui/theme'
import { withEmotion }    from '@providers/next-app-with-emotion'

export const withProviders = compose(
  withEmotion({
    Provider: ThemeProvider,
  }),
  withHelmet()
)

const Bare = ({ Component, pageProps, props }) => {
  const client = new ApolloClient({
    uri: 'https://wp.dream-team.tech/graphql',
    cache: new InMemoryCache(),
  })

  const Composed = withProviders(App)

  return (
    <ApolloProvider client={client}>
      <Composed Component={Component} {...pageProps} {...props} />
    </ApolloProvider>
  )
}

export default Bare
