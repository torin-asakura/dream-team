export type Language = 'RU' | 'EN'

export interface ItemProps {
  title: string
  content: string
  excerpt: string
  image: {
    altText: string
    sourceUrl: string
  }
  index: number
}
