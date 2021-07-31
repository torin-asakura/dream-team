import { useCardByID }      from './queries'
import { COSTS_ID_EN }      from './constants'
import { COSTS_ID_RU }      from './constants'
import { TIME_FRAME_ID_EN } from './constants'
import { TIME_FRAME_ID_RU } from './constants'
import { HOW_WE_DO_ID_EN }  from './constants'
import { HOW_WE_DO_ID_RU }  from './constants'
import { WHY_US_ID_EN }     from './constants'
import { WHY_US_ID_RU }     from './constants'

const useData = () => {
  const costsEn = useCardByID(COSTS_ID_EN)
  const costsRu = useCardByID(COSTS_ID_RU)
  const timeFrameEn = useCardByID(TIME_FRAME_ID_EN)
  const timeFrameRu = useCardByID(TIME_FRAME_ID_RU)
  const howWeDoEn = useCardByID(HOW_WE_DO_ID_EN)
  const howWeDoRu = useCardByID(HOW_WE_DO_ID_RU)
  const whyUsEn = useCardByID(WHY_US_ID_EN)
  const whyUsRu = useCardByID(WHY_US_ID_RU)

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
