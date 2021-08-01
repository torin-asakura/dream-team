import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_SKILL_CATEGORIES = gql`
  query GetSkillCategories {
    skillCategories {
      nodes {
        name
        skills {
          nodes {
            title
            menuOrder
          }
        }
      }
    }
  }
`

const useSkills = () => {
  const { data, error } = useQuery(GET_SKILL_CATEGORIES)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.skillCategories.nodes
  }

  return []
}

export { useSkills }
