import { useQuery } from '@apollo/client'
import { gql }      from '@apollo/client'

const GET_SKILL_LISTS = gql`
  query GetSkillLists {
    skillLists {
      nodes {
        name
        skills {
          nodes {
            title
          }
        }
      }
    }
  }
`

const useSkillLists = () => {
  const { data, error } = useQuery(GET_SKILL_LISTS)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.skillLists.nodes
  }

  return []
}

export { useSkillLists }
