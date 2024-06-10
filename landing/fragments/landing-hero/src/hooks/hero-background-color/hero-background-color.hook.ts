/* eslint-disable no-console */

import { useEffect }                  from 'react'
import { useState }                   from 'react'

import { Browser }                    from './hero-background-color.constants'
import { UseHeroBackgroundColorType } from './hero-background-color.interfaces'

export const useHeroBackgroundColor: UseHeroBackgroundColorType = () => {
  const [color, setColor] = useState<string>('background.hero')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    // @ts-ignore
    const brands = navigator?.userAgentData?.brands.map((b) => b.brand)

    console.log('BACKGROUND_COLOR:', color)
    console.log('USER_AGENT:', userAgent)
    console.log('USER_AGENT_DATA:', brands)

    if (userAgent.indexOf(Browser.CHROME) > -1) {
      setColor('background.purpleInChrome')
    } else if (userAgent.indexOf(Browser.SAFARI) > -1) {
      setColor('background.purpleInSafari')
    } else if (userAgent.indexOf(Browser.FIREFOX) > -1) {
      setColor('background.purpleInFirefox')
    } else {
      setColor('background.hero')
    }
  }, [color])

  return { heroBackgroundColor: color }
}
