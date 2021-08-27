import Document          from 'next/document'
import compose           from 'recompose/compose'
import { withEmotion }   from '@providers/next-document-with-emotion'
import { withOpenGraph } from '@atls/next-document-with-opengraph'
import { withIcons }     from '@atls/next-document-with-icons'
import { withHelmet }    from '@atls/next-document-with-helmet'
import { withGtag }      from '@atls/next-document-with-gtag'

const withProviders = compose(
  withEmotion(),
  withOpenGraph({ image: 'https://dream-team.tech/wp-content/uploads/2021/07/cover.jpg' }),
  withIcons(),
  withHelmet(),
  withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
