import { gql } from '@apollo/client'

export const GET_SKILLS = gql(`
  query GetSkills {
    skillCategories {
      nodes {
        name
        skillAddons {
          icon {
            node {
              mediaItemUrl
            }
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
