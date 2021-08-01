import { useReviews } from './queries'

const useData = () => {
  const reviews = useReviews()

  return reviews
}

export { useData }
