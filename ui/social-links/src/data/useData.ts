import { TELEGRAM }             from './constants'
import { useSocialNetworkById } from './queries'

const useData = () => {
  const telegram = useSocialNetworkById(TELEGRAM)

  return {
    telegram,
  }
}

export { useData }
