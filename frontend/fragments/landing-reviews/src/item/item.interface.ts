import { Language } from '../landing-reviews.interface'

export interface Review {
  title: string
  content: string
  review: {
    respondent: string
    companylink: string
  }
}

export interface ItemProps {
  review: Review
  language: Language
  onClick: () => any
}
