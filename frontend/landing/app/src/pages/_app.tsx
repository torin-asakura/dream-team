import App               from 'next/app'
import compose           from 'recompose/compose'
import { withApollo }    from '@atls/next-app-with-apollo'

export const withProviders = compose(
  withApollo({
    uri: 'http://localhost:8080/graphql',
    onUnauthenticated: () => {
      // eslint-disable-next-line
      console.log('Unauthenticated')
    }
  })
)

export default withProviders(App)
