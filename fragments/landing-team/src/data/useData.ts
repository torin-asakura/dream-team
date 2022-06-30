import { useRecruits } from './queries'

const useData = () => {
  const recruits = useRecruits()

  return recruits
}

export { useData }
