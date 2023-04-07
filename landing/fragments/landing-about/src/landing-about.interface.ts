export type Language = 'RU' | 'EN'

interface ContentData {
  contentAddons: {
    title: string
    role: string
    content: string
    image: {
      altText: string
      sourceUrl: string
    }
  }
  language: {
    code: string
  }
}

interface Data {
  RU: Array<ContentData>
  EN: Array<ContentData>
}

export interface LandingAboutProps {
  language: Language
  data: Data
}
