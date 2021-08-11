import { useFragmentById } from './queries'
import { useAssetById }    from './queries'
import { HERO_CONTENT_EN } from './constants'
import { HERO_CONTENT_RU } from './constants'
import { VIDEO_DESKTOP }   from './constants'
import { VIDEO_MOBILE }    from './constants'

const useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN)
  const RU = useFragmentById(HERO_CONTENT_RU)
  const Desktop = useAssetById(VIDEO_DESKTOP)
  const Mobile = useAssetById(VIDEO_MOBILE)

  return {
    EN,
    RU,
    Desktop,
    Mobile,
  }
}

export { useData }
