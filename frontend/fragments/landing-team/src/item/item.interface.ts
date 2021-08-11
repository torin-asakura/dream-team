import { Language } from '../landing-team.interface'

export interface ItemProps {
  recruit: string
  image: {
    node: {
      link: string
    }
  }
  language: Language
}
