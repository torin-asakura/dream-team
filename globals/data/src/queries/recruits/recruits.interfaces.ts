export type RecruitsDataType = {
  title: string
  featuredImage: {
    node: {
      title: string
      mediaItemUrl: string
    }
  }
  language: {
    code: string
  }
}[]
