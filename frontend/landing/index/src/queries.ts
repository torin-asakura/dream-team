import { gql } from '@apollo/client'

const MY_QUERY = gql`
  query MyQuery {
    allSettings {
      discussionSettingsDefaultCommentStatus
    }
}
`

export { MY_QUERY }
