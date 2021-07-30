import { useHeroContentEN } from './queries'
import { useHeroContentRU } from './queries'

const useData = () => {
  const { fragment: RU } = useHeroContentRU()
  const { fragment: EN } = useHeroContentEN()

  if (RU && EN) {
    return [EN, RU]
  }

  return []
}

export { useData }
