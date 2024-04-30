
import { validate } from '../validate'



const useRecruits = (data) => {

  if (data) {
    return data.recruits.nodes.map((node) => validate(node))
  }

  return []
}

export { useRecruits }
