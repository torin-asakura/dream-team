import { ApolloProvider } from '@apollo/client'
import { ApolloClient }   from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'
import { withHelmet }     from '@atls/next-app-with-helmet'

import App                from 'next/app'
import React              from 'react'
import compose            from 'recompose/compose'

import { Preloader }      from '@ui/preloader'
import { ThemeProvider }  from '@ui/theme'

export const withProviders = compose(withHelmet())

const Bare = ({ Component, pageProps, props }) => {
  const client = new ApolloClient({
    uri: 'https://wp.dream-team.tech/graphql',
    cache: new InMemoryCache(),
  })

  const Composed = withProviders(App)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Preloader>
          <Composed Component={Component} {...pageProps} {...props} />
        </Preloader>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Bare
