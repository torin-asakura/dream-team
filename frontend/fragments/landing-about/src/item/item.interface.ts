import { ContentProps } from './content'

export type Language = 'RU' | 'EN'

export interface ContentObject extends ContentProps {
  fragments: {
    reverse: boolean
  }
  featuredImage: {
    node: {
      link: string
    }
  }
}

export interface ItemProps {
  contentObject: ContentObject
}
