import { Language } from '../landing-reviews.interface'

export interface Review {
  title: string
  content: string
  customerReview: {
    respondent: string
    companylink: string
    skills: { edges: any[] }
  }
}

export interface ItemProps {
  review: Review
  language: Language
  onClick: () => any
}
