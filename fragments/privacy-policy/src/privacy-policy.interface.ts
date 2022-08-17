export type Language = 'RU' | 'EN'

interface ContentData {
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
  RU: Array<ContentData>
  EN: Array<ContentData>
}

export interface PrivacyPolicyProps {
  language: Language
  data: Data
}
