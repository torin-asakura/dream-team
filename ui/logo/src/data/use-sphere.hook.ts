import { useMediaItemBySlug } from './media-item-by-slug.query'

export const useSphere = () => {
  const data = useMediaItemBySlug('/sphere-light/')

  return data
}
