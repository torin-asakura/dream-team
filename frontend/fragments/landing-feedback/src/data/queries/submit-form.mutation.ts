import { gql }         from '@apollo/client'
import { useMutation } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm($name: String!, $email: String!, $type: String!, $requisites: String!) {
    submitForm(
      input: {
        formId: 2
        data: [
          { id: 5, value: $name }
          { id: 6, value: $email }
          { id: 19, value: $type }
          { id: 9, value: $requisites }
        ]
      }
    ) {
      errors {
        fieldId
        message
        slug
      }
      message
      success
    }
  }
`

const useSubmitForm = () => {
  const [submitForm, { data, error }] = useMutation(SUBMIT_FORM)

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return [submitForm, data.submitForm]
  }

  return [submitForm, {}]
}

export { useSubmitForm }
