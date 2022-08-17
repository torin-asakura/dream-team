export type Language = 'RU' | 'EN'

type ContentData = {
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
  ['RU']: ContentData[]
  ['EN']: ContentData[]
}

export interface LandingContactsProps {
  language: Language
  data: Data
}
