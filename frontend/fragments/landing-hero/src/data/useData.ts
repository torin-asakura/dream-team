import { useFragmentById } from './queries'
import { useAssetById }    from './queries'
import { HERO_CONTENT_EN } from './constants'
import { HERO_CONTENT_RU } from './constants'
import { VIDEO_DESKTOP }   from './constants'
import { VIDEO_MOBILE }    from './constants'
import { VIDEO_MOBILE_2 }    from './constants'

const useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN)
  const RU = useFragmentById(HERO_CONTENT_RU)
  const Desktop = useAssetById(VIDEO_DESKTOP)
  const Mobile = useAssetById(VIDEO_MOBILE)
  const Mobile2 = useAssetById(VIDEO_MOBILE_2)

  return {
    EN,
    RU,
    Desktop,
    Mobile,
    Mobile2
  }
}

export { useData }
