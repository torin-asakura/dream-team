import { FORM_EN }     from './constants'
import { FORM_RU }     from './constants'
import { useFormData } from './queries'

const useData = () => {
  const formEn = useFormData(FORM_EN)
  const formRu = useFormData(FORM_RU)

  return {
    EN: formEn,
    RU: formRu,
  }
}

export { useData }
