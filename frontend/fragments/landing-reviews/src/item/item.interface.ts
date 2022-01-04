import { Language } from '../landing-reviews.interface'

export interface Review {
  title: string
  content: string
  review: {
    respondent: string
    companylink: string
    skills: any[]
  }
}

export interface ItemProps {
  review: Review
  language: Language
  onClick: () => any
}
