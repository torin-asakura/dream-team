import { useCardByID }   from './queries'
import { COSTS_EN }      from './constants'
import { COSTS_RU }      from './constants'
import { TIME_FRAME_EN } from './constants'
import { TIME_FRAME_RU } from './constants'
import { HOW_WE_DO_EN }  from './constants'
import { HOW_WE_DO_RU }  from './constants'
import { WHY_US_EN }     from './constants'
import { WHY_US_RU }     from './constants'

const useData = () => {
  const costsEn = useCardByID(COSTS_EN)
  const costsRu = useCardByID(COSTS_RU)
  const timeFrameEn = useCardByID(TIME_FRAME_EN)
  const timeFrameRu = useCardByID(TIME_FRAME_RU)
  const howWeDoEn = useCardByID(HOW_WE_DO_EN)
  const howWeDoRu = useCardByID(HOW_WE_DO_RU)
  const whyUsEn = useCardByID(WHY_US_EN)
  const whyUsRu = useCardByID(WHY_US_RU)

  return (
    {
      costs: { EN: costsEn, RU: costsRu },
      timeFrame: { EN: timeFrameEn, RU: timeFrameRu },
      howWeDo: { EN: howWeDoEn, RU: howWeDoRu },
      whyUs: { EN: whyUsEn, RU: whyUsRu },
    } || {}
  )
}

export { useData }
