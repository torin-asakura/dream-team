import { ApolloProvider } from '@apollo/client'

import React              from 'react'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'

const Bare = ({ Component, pageProps, props }) => {
  const client = getClient()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...props} {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Bare
