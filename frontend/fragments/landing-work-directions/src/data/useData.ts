import { useSkills } from './queries'
import { sort }      from './sort'

const useData = () => {
  const skills = useSkills()

  return sort(skills)
}

export { useData }
