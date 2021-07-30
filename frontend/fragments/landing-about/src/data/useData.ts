import { useAboutCards } from './queries'
import { separateLanguages } from './separate-languages.util'

const useData = () => {
  const cards = useAboutCards()

  if (cards) {
    return separateLanguages(cards)
  }

  return []
}

export { useData }
