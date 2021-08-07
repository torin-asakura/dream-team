import { useReviews } from './queries'
import { sort }       from './sort'

const useData = () => {
  const reviews = useReviews()

  return sort(reviews)
}

export { useData }
