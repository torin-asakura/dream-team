import { HERO_CONTENT_EN }    from './constants'
import { HERO_CONTENT_RU }    from './constants'
import { SPHERE_SLUG }        from './constants'
import { useFragmentById }    from './queries'
import { useMediaItemBySlug } from './queries'

const useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN)
  const RU = useFragmentById(HERO_CONTENT_RU)
  const sphereUrl = useMediaItemBySlug(SPHERE_SLUG)

  return {
    EN,
    RU,
    sphereUrl,
  }
}

export { useData }
