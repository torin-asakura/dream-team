import { useSkills } from './queries'
import { sort }      from './sort'

const useData = (data) => {
  const skills = useSkills(data)

  return sort(skills)
}

export { useData }
