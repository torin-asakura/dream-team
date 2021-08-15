import { useFormData } from './queries'
import { FORM_EN }     from './constants'
import { FORM_RU }     from './constants'

const useData = () => {
  const formEn = useFormData(FORM_EN)
  const formRu = useFormData(FORM_RU)

  return {
    EN: formEn,
    RU: formRu,
  }
}

export { useData }
