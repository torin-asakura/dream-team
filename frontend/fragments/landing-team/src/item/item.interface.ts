import { Language } from '../landing-team.interface'

export interface ItemProps {
  recruit: string
  image: {
    node: {
      mediaItemUrl: string
      title: string
    }
  }
  language: Language
}
