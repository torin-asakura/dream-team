import { usePostById }   from './queries'
import { CONTACT_US_EN } from './constants'
import { CONTACT_US_RU } from './constants'

const useData = () => {
  const contactUsEn = usePostById(CONTACT_US_EN)
  const contactUsRu = usePostById(CONTACT_US_RU)

  return {
    EN: contactUsEn,
    RU: contactUsRu,
  }
}

export { useData }
