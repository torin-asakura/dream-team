import { APOLLO_STATE_PROP_NAME } from '../client.constants'
import { AddApolloState }         from './add-apollo-state.interfaces'

export const addApolloState: AddApolloState = (client, pageProps) => {
  if (pageProps?.props) {
    // eslint-disable-next-line no-param-reassign
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}
