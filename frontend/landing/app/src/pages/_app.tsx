import App               from 'next/app'
import compose           from 'recompose/compose'
import { withApollo }    from '@atls/next-app-with-apollo'
import { withEmotion }   from '@providers/next-app-with-emotion'
import { ThemeProvider } from '@ui/theme'

export const withProviders = compose(
  withApollo({
    /** Local * */
    uri: 'http://localhost:8080/index.php?graphql',
    /** Prod * */
    // uri: 'https://dream-team.tech/graphql',
    onUnauthenticated: () => {
      // eslint-disable-next-line
      console.log('Unauthenticated')
    },
  }),
  withEmotion({
    Provider: ThemeProvider,
  })
)

export default withProviders(App)
