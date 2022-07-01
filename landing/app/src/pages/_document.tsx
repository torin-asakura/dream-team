import { withGtag }      from '@atls/next-document-with-gtag'
import { withHelmet }    from '@atls/next-document-with-helmet'
import { withIcons }     from '@atls/next-document-with-icons'
import { withOpenGraph } from '@atls/next-document-with-opengraph'

import Document          from 'next/document'
import compose           from 'recompose/compose'

const withProviders = compose(
  withOpenGraph({ image: 'https://dream-team.tech/wp-content/uploads/2021/07/cover.jpg' }),
  withIcons(),
  withHelmet(),
  withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
