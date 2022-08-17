export type Language = 'RU' | 'EN'

type ContentData = {
  contentAddons: {
    title: string
    role: string
    content: string
  }
  language: {
    code: string
  }
}

interface Data {
  ['RU']: ContentData[]
  ['EN']: ContentData[]
}

export interface PrivacyPolicyProps {
  language: Language
  data: Data
}
