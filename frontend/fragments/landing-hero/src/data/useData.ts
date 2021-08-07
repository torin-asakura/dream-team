import { useFragmentById } from './queries'
import { HERO_CONTENT_EN } from './constants'
import { HERO_CONTENT_RU } from './constants'

const useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN)
  const RU = useFragmentById(HERO_CONTENT_RU)

  if (RU && EN) {
    return [EN, RU]
  }

  return []
}

export { useData }
