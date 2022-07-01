import { withApollo }    from '@atls/next-app-with-apollo'
import { withHelmet }    from '@atls/next-app-with-helmet'

import App               from 'next/app'
import compose           from 'recompose/compose'

import { ThemeProvider } from '@ui/theme'
import { withEmotion }   from '@providers/next-app-with-emotion'

export const withProviders = compose(
  withApollo({
    /** Local * */
    // uri: 'http://localhost:8080/index.php?graphql',
    /** Prod * */
    uri: 'https://wp.dream-team.tech/graphql',
    onUnauthenticated: () => {
      // eslint-disable-next-line
      console.log('Unauthenticated')
    },
  }),
  withEmotion({
    Provider: ThemeProvider,
  }),
  withHelmet()
)

export default withProviders(App)
