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
    }[]
  }
}

export interface ItemProps {
  category: Category
}
