import 'locomotive-scroll/dist/locomotive-scroll.css'

import { ApolloProvider } from '@apollo/client'

import React              from 'react'

import { ThemeProvider }  from '@ui/theme'
import { useApollo }      from '@globals/data'

const Bare = ({ Component, pageProps, props }) => {
  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...props} {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Bare
