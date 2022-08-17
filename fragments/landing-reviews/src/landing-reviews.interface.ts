export type Language = 'RU' | 'EN'

type Skills = {
  title: string
}

type ContentData = {
  content: string
  menuOrder: number
  title: string
  review: {
    respondent: string
    companylink: string
    skills: Skills[]
  }
  language: {
    code: string
  }
}

interface Data {
  ['RU']: ContentData[]
  ['EN']: ContentData[]
}

export interface LandingReviewsProps {
  language: Language
  data: Data
}
