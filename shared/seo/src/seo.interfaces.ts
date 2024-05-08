export interface SeoDataProps {
  RU: {
    metaDesc: string
    title: string
  }
  EN: {
    metaDesc: string
    title: string
  }
}

export interface SeoProps {
  SEO: SeoDataProps
  language: string
}
