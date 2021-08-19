import React             from 'react'
import Helmet            from 'react-helmet'

import { title }         from './seo.data'
import { descriptionRu } from './seo.data'
import { descriptionEn } from './seo.data'

const Seo = () => (
  <Helmet
    title={title}
    meta={[
      {
        name: 'description',
        lang: 'ru',
        content: descriptionRu,
      },
      {
        name: 'description',
        lang: 'en',
        content: descriptionEn,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        lang: 'ru',
        content: descriptionRu,
      },
      {
        property: 'og:description',
        lang: 'en',
        content: descriptionEn,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        lang: 'ru',
        content: descriptionRu,
      },
      {
        name: 'twitter:description',
        lang: 'en',
        content: descriptionEn,
      },
    ]}
  />
)

export { Seo }
