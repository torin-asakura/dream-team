export type Language = 'RU' | 'EN'

interface Skills {
  title: string
}

interface ContentData {
  content: string
  menuOrder: number
  title: string
  review: {
    respondent: string
    companylink: string
    skills: Array<Skills>
  }
  language: {
    code: string
  }
}

interface Data {
  RU: Array<ContentData>
  EN: Array<ContentData>
}

export interface LandingReviewsProps {
  language: Language
  data: Data
}
