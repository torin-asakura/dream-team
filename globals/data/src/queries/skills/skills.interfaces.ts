export type SkillsDataType = {
  name: string
  skillAddons: {
    icon: {
      mediaItemUrl: string
    }
  }
  skills: {
    nodes: {
      title: string
      menuOrder: string
      language: {
        code: string
      }
    }[]
  }
}[]
