import { gql }         from '@apollo/client'
import { useMutation } from '@apollo/client'

/** Local * */

// formId: 2
// data: [
//   { id: 5, value: $name }
//   { id: 6, value: $email }
//   { id: 19, value: $type }
//   { id: 9, value: $requisites }
// ]
// }

/** Prod * */

// formId: 3
// data: [
//   { id: 7, value: $name }
//   { id: 8, value: $email }
//   { id: 9, value: $type }
//   { id: 10, value: $requisites }

const SUBMIT_FORM = gql`
  mutation SubmitForm($name: String!, $email: String!, $type: String!, $requisites: String!) {
    submitForm(
      input: {
        formId: 3
        data: [
          { id: 12, value: $name }
          { id: 13, value: $email }
          { id: 20, value: $type }
          { id: 15, value: $requisites }
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

  if (data) {
    return [submitForm, data.submitForm, error]
  }

  return [submitForm, {}, error]
}

export { useSubmitForm }
