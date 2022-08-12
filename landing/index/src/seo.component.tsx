import React  from 'react'
import Helmet from 'react-helmet'

const Seo = ({ language, SEO }) => {
  const { title } = SEO[language]

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          lang: 'ru',
          content: SEO.RU.metaDesc,
        },
        {
          name: 'description',
          lang: 'en',
          content: SEO.EN.metaDesc,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          lang: 'ru',
          content: SEO.RU.metaDesc,
        },
        {
          property: 'og:description',
          lang: 'en',
          content: SEO.EN.metaDesc,
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
          content: SEO.RU.metaDesc,
        },
        {
          name: 'twitter:description',
          lang: 'en',
          content: SEO.EN.metaDesc,
        },
      ]}
    />
  )
}
export { Seo }
