import { HERO_CONTENT_EN } from './constants'
import { HERO_CONTENT_RU } from './constants'
import { useFragmentById } from './queries'

const useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN)
  const RU = useFragmentById(HERO_CONTENT_RU)

  return {
    EN,
    RU,
  }
}

export { useData }
