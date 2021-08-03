import { gql }         from '@apollo/client'
import { useMutation } from '@apollo/client'

const SUBMIT_FORM = gql`
mutation SEND_EMAIL {
  sendEmail(
    input: {
      to: "ne@atls.team"
      from: "test@test.com"
      subject: "test email"
      body: "test email"
      clientMutationId: "test"
    }
  ) {
    origin
    sent
    message
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
