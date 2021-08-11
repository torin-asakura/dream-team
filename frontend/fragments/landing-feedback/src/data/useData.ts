import { useFragmentById } from './queries'
import { useFormData }     from './queries'
import { useAssetById }    from './queries'
import { CONTACT_US_EN }   from './constants'
import { CONTACT_US_RU }   from './constants'
import { FORM_EN }         from './constants'
import { FORM_RU }         from './constants'
import { ASSET }           from './constants'

const useData = () => {
  const contactUsEn = useFragmentById(CONTACT_US_EN)
  const contactUsRu = useFragmentById(CONTACT_US_RU)
  const formEn = useFormData(FORM_EN)
  const formRu = useFormData(FORM_RU)
  const asset = useAssetById(ASSET)

  return {
    EN: contactUsEn,
    RU: contactUsRu,
    forms: {
      EN: formEn,
      RU: formRu,
    },
    asset,
  }
}

export { useData }
