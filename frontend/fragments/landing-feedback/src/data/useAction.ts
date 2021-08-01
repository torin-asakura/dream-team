import { useSubmitForm } from './queries'

const useAction = () => {
  const action = useSubmitForm()

  return action
}

export { useAction }
