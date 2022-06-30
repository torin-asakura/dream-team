import { CONTACTS_EN }      from './constants'
import { CONTACTS_RU }      from './constants'
import { FEEDBACK_EMAIL }   from './constants'
import { FEEDBACK_PHONE }   from './constants'
import { WORKING_HOURS_EN } from './constants'
import { WORKING_HOURS_RU } from './constants'
import { ASSET }            from './constants'
import { useFragmentById }  from './queries'
import { useAssetById }     from './queries'

const useData = () => {
  const contactsEn = useFragmentById(CONTACTS_EN)
  const contactsRu = useFragmentById(CONTACTS_RU)
  const feedbackEmail = useFragmentById(FEEDBACK_EMAIL)
  const feedbackPhone = useFragmentById(FEEDBACK_PHONE)
  const workingHoursEn = useFragmentById(WORKING_HOURS_EN)
  const workingHoursRu = useFragmentById(WORKING_HOURS_RU)
  const asset = useAssetById(ASSET)

  return {
    contacts: {
      EN: contactsEn,
      RU: contactsRu,
    },
    workingHours: {
      EN: workingHoursEn,
      RU: workingHoursRu,
    },
    asset,
    feedbackEmail,
    feedbackPhone,
  }
}

export { useData }
