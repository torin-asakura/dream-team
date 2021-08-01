import { gql }         from '@apollo/client'
import { useMutation } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm($input: SubmitGravityFormsFormInput!) {
    submitGravityFormsForm(input: $input) {
      clientMutationId
      errors {
        message
      }
    }
  }
`

const useSubmitForm = () => {
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return [submitForm, data.submitGravityFormsForm]
  }

  return [submitForm, {}]
}

export { useSubmitForm }
