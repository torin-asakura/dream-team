import { WORKING_HOURS_EN } from './constants'
import { WORKING_HOURS_RU } from './constants'
import { FEEDBACK_EMAIL }   from './constants'
import { FEEDBACK_PHONE }   from './constants'
import { BY }               from './constants'
import { useFragmentById }  from './queries'

const useData = () => {
  const workingHoursEn = useFragmentById(WORKING_HOURS_EN)
  const workingHoursRu = useFragmentById(WORKING_HOURS_RU)
  const feedbackEmail = useFragmentById(FEEDBACK_EMAIL)
  const feedbackPhone = useFragmentById(FEEDBACK_PHONE)
  const by = useFragmentById(BY)

  return {
    workingHoursEn,
    workingHoursRu,
    feedbackEmail,
    feedbackPhone,
    by,
  }
}

export { useData }
