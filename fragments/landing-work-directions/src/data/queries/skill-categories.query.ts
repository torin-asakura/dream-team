import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

import { validate } from '../validate'

const GET_SKILL_CATEGORIES = gql`
  query GetSkillCategories {
    skillCategories {
      nodes {
        name
        skillAddons {
          ikonka {
            mediaItemUrl
          }
        }
        skills {
          nodes {
            title
            menuOrder
            language {
              code
            }
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
    return data.skillCategories.nodes.map((node) => validate(node))
  }

  return []
}

export { useSkills }
