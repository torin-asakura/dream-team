import { ContentProps } from './content'

export type Language = 'RU' | 'EN'

export interface ContentObject extends ContentProps {
  fragments: {
    reverse: boolean
  }
}

export interface ItemProps {
  contentObject: ContentObject
}
