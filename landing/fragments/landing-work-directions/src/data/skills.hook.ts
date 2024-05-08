import { useQuery }            from '@apollo/client'

import { removeParagraphTags } from '@ui/utils/src'

import { GET_SKILLS }          from './skills.query'
import { sortBySide }          from '../helpers'

export const useSkills = () => {
  const { data } = useQuery(GET_SKILLS)

  if (!data) {
    return { leftSide: [], rightSide: [] }
  }

  const skillsData = data.skillCategories.nodes

  return sortBySide(skillsData.map((node) => removeParagraphTags(node)))
}
