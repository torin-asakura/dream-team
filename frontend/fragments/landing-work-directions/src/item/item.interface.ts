export interface Category {
  name: string
  skills: {
    nodes: {
      title: string
      menuOrder: number | null
    }[]
  }
}

export interface ItemProps {
  category: Category
}
