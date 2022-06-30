import { CONTACT_US_EN }   from './constants'
import { CONTACT_US_RU }   from './constants'
import { ASSET }           from './constants'
import { useFragmentById } from './queries'
import { useAssetById }    from './queries'

const useData = () => {
  const contactUsEn = useFragmentById(CONTACT_US_EN)
  const contactUsRu = useFragmentById(CONTACT_US_RU)
  const asset = useAssetById(ASSET)

  return {
    EN: contactUsEn,
    RU: contactUsRu,
    asset,
  }
}

export { useData }
