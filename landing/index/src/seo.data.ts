import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_INDEX_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/") {
      seo {
        title
        metaDesc
      }
      translation(language: EN) {
        seo {
          title
          metaDesc
        }
      }
    }
  }
`

const useSeo = () => {
  const { data } = useQuery(GET_INDEX_SEO)

  if (data) {
    return {
      RU: data.pageBy.seo,
      EN: data.pageBy.translation.seo,
    }
  }

  return { RU: {}, EN: {} }
}

export { useSeo }
