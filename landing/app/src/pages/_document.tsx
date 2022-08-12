/* eslint-disable max-classes-per-file */

import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import { gql }           from '@apollo/client'
import { withGtag }      from '@atls/next-document-with-gtag'
import { withHelmet }    from '@atls/next-document-with-helmet'

import Document          from 'next/document'
import React             from 'react'
import compose           from 'recompose/compose'

const client = new ApolloClient({
  uri: 'https://wp.dream-team.tech/graphql',
  cache: new InMemoryCache(),
})

const withIcons = () => (TargetComponent) =>
  class WithIcons extends TargetComponent {
    static async getInitialProps(context) {
      const props = await super.getInitialProps(context)

      const faviconResponse = await client.query({
        query: gql`
          query GetFavicon {
            mediaItemBy(uri: "/favicon/") {
              sourceUrl
            }
          }
        `,
      })

      const appleTouchIconResponse = await client.query({
        query: gql`
          query GetFavicon {
            mediaItemBy(uri: "/apple_touch_icon/") {
              sourceUrl
            }
          }
        `,
      })

      props.head.push(
        <link rel='apple-touch-icon' href={appleTouchIconResponse.data.mediaItemBy?.sourceUrl} />,
        <link rel='icon' type='image/png' href={faviconResponse.data.mediaItemBy?.sourceUrl} />
      )

      return props
    }

    static renderDocument(...args) {
      // @ts-ignore
      return Document.renderDocument(...args)
    }
  }

const withOpenGraph = () => (TargetComponent) =>
  class WithOpenGraph extends TargetComponent {
    static async getInitialProps(context) {
      const props = await super.getInitialProps(context)

      const coverResponse = await client.query({
        query: gql`
          query GetCover {
            mediaItemBy(uri: "/main-cover/") {
              sourceUrl
            }
          }
        `,
      })

      props.head.push(
        <meta property='og:image' content={coverResponse.data.mediaItemBy?.sourceUrl} />
      )

      return props
    }

    static renderDocument(...args) {
      // @ts-ignore
      return Document.renderDocument(...args)
    }
  }

const withProviders = compose(
  withOpenGraph(),
  withIcons(),
  withHelmet(),
  withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
