import { Language } from '../landing-work-directions.interface'

export interface Category {
  name: string
  skillAddons: {
    ikonka: {
      link: string
    }
  }
  skills: {
    nodes: {
      title: string
      menuOrder: number | null
      language:
        | {
            code: Language
          }
        | null
        | undefined
    }[]
  }
}

export interface ItemProps {
  category: Category
  language: Language
}
