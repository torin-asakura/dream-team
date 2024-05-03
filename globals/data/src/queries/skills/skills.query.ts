import { gql } from '../../__generated__'

export const GET_SKILLS = gql(`
  query GetSkills {
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
`)
