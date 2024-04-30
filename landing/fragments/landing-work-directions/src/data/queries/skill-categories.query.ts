import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

import { validate } from '../validate'

const GET_SKILL_CATEGORIES = gql`
  query GetSkillCategories {
    skillCategories {
      nodes {
        name
        skillAddons {
          icon {
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

const useSkills = (data) => {

  if (data) {
    return data.map((node) => validate(node))
  }

  return []
}

export { useSkills }
